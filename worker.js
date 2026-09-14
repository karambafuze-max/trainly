const LYFTA_BASE = "https://my.lyfta.app";
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{...corsHeaders,"Content-Type":"application/json; charset=utf-8","Cache-Control":"public, max-age=900"}})}
export default {async fetch(request,env){
  if(request.method==="OPTIONS")return new Response(null,{status:204,headers:corsHeaders});
  if(request.method!=="GET")return json({error:"Method not allowed"},405);
  if(!env.LYFTA_API_KEY)return json({error:"LYFTA_API_KEY is not configured"},500);
  const url=new URL(request.url);
  if(url.pathname==="/"||url.pathname==="/health")return json({ok:true,service:"Trainly Lyfta API"});
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
  return json({error:"Not found"},404);
}};
