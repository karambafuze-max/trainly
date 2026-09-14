const LYFTA_BASE = "https://my.lyfta.app";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
function json(data,status=200,cache="public, max-age=900"){return new Response(JSON.stringify(data),{status,headers:{...corsHeaders,"Content-Type":"application/json; charset=utf-8","Cache-Control":cache}})}
function decodeHtml(s=''){return s.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim()}
async function translateRu(items){
  if(!items?.length)return [];
  try{
    const joined=items.join('\n|||\n');
    const u='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&q='+encodeURIComponent(joined);
    const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0'}}); if(!r.ok)throw 0;
    const data=await r.json(); const text=(data?.[0]||[]).map(x=>x?.[0]||'').join('');
    const arr=text.split(/\s*\|\|\|\s*/).map(x=>x.trim()).filter(Boolean);
    return arr.length===items.length?arr:items;
  }catch{return items}
}
async function findLyftaPage(name){
  const q=`site:lyfta.app/exercise "${name}"`;
  const engines=[
    'https://html.duckduckgo.com/html/?q='+encodeURIComponent(q),
    'https://lite.duckduckgo.com/lite/?q='+encodeURIComponent(q)
  ];
  for(const u of engines){
    try{
      const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0 (compatible; Trainly/1.0)'}}); if(!r.ok)continue;
      const t=await r.text();
      const direct=[...t.matchAll(/https?:\/\/(?:www\.)?lyfta\.app\/exercise\/[A-Za-z0-9_%().+\-]+/g)].map(m=>m[0]);
      if(direct.length)return direct[0].replace(/&amp;.*/,'');
      for(const m of t.matchAll(/uddg=([^&"']+)/g)){
        const x=decodeURIComponent(m[1]); if(/https?:\/\/(?:www\.)?lyfta\.app\/exercise\//.test(x))return x;
      }
    }catch{}
  }
  return null;
}
function sectionItems(html,heading){
  const idx=html.toLowerCase().indexOf(heading.toLowerCase()); if(idx<0)return [];
  const tail=html.slice(idx,idx+30000); const end=tail.search(/<h2[^>]*>/i); const part=end>0?tail.slice(0,end):tail;
  return [...part.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map(m=>decodeHtml(m[1])).filter(x=>x.length>12).slice(0,8);
}
function firstParagraph(html,needle){
  const i=html.toLowerCase().indexOf(needle.toLowerCase()); if(i<0)return '';
  const part=html.slice(i,i+12000); const m=part.match(/<p[^>]*>([\s\S]*?)<\/p>/i); return m?decodeHtml(m[1]):'';
}
function mediaFromHtml(html){
  const video=(html.match(/https?:[^"'\\\s]+\.(?:mp4|webm)(?:\?[^"'\\\s]*)?/i)||[])[0]||'';
  let thumb='';
  const tm=html.match(/\/_next\/image\?[^"']*url=([^&"']+)/i); if(tm){try{thumb='https://www.lyfta.app'+decodeURIComponent(tm[1])}catch{}}
  return {videoUrl:video,thumbnail:thumb};
}
export default {async fetch(request,env){
  if(request.method==="OPTIONS")return new Response(null,{status:204,headers:corsHeaders});
  if(request.method!=="GET")return json({error:"Method not allowed"},405);
  if(!env.LYFTA_API_KEY)return json({error:"LYFTA_API_KEY is not configured"},500);
  const url=new URL(request.url);
  if(url.pathname==="/"||url.pathname==="/health")return json({ok:true,service:"Trainly Lyfta API v10"});
  if(url.pathname==="/api/library"||url.pathname==="/exercises"){
    const search=url.searchParams.get("search")||"";
    const limit=Math.min(Math.max(Number(url.searchParams.get("limit"))||100,1),100);
    const offset=Math.max(Number(url.searchParams.get("offset"))||0,0);
    const lyftaUrl=new URL("/api/v1/exercises/library",LYFTA_BASE);
    lyftaUrl.searchParams.set("limit",String(limit));lyftaUrl.searchParams.set("offset",String(offset));if(search)lyftaUrl.searchParams.set("search",search);
    try{
      const response=await fetch(lyftaUrl.toString(),{headers:{Authorization:`Bearer ${env.LYFTA_API_KEY}`,Accept:"application/json"}});
      const text=await response.text();
      if(!response.ok)return json({error:"Lyfta API error",status:response.status,details:text},response.status);
      try{return json(JSON.parse(text))}catch{return json({error:"Invalid response from Lyfta API"},502)}
    }catch(error){return json({error:"Could not connect to Lyfta API",details:String(error)},502)}
  }
  if(url.pathname==="/api/guide"){
    const name=(url.searchParams.get('name')||'').trim(); if(!name)return json({ok:false,error:'Missing name'},400);
    try{
      const pageUrl=await findLyftaPage(name); if(!pageUrl)return json({ok:false,error:'Guide not found'},404,"no-store");
      const pr=await fetch(pageUrl,{headers:{'User-Agent':'Mozilla/5.0 (compatible; Trainly/1.0)'}}); if(!pr.ok)return json({ok:false,error:'Guide page unavailable'},502,"no-store");
      const html=await pr.text();
      let steps=sectionItems(html,'Performing the: A Step-by-Step Tutorial');
      if(!steps.length)steps=sectionItems(html,'Step-by-step guide');
      let tips=sectionItems(html,'Tips for Performing');
      const intro=firstParagraph(html,'Introduction to');
      const ru=await translateRu([...steps,...tips]);
      const ruSteps=ru.slice(0,steps.length),ruTips=ru.slice(steps.length);
      const media=mediaFromHtml(html);
      return json({ok:true,pageUrl,steps:ruSteps,tips:ruTips,intro,...media},200,"public, max-age=604800");
    }catch(e){return json({ok:false,error:'Guide fetch failed',details:String(e)},502,"no-store")}
  }
  return json({error:"Not found"},404);
}};
