export default {
  async fetch(request, env, ctx) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Cache-Control': 'public, max-age=3600'
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return json({ ok: true, configured: Boolean(env.LYFTA_API_KEY) }, 200, cors);
    }
    if (url.pathname !== '/api/library') return json({ error: 'Not found' }, 404, cors);
    if (!env.LYFTA_API_KEY) return json({ error: 'LYFTA_API_KEY is not configured' }, 500, cors);

    const cache = caches.default;
    const cacheKey = new Request(new URL('/api/library', url.origin).toString(), request);
    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    try {
      const all = [];
      const seen = new Set();
      let sourceShape = null;
      for (let page = 1; page <= 100; page++) {
        const lyftaUrl = new URL('https://my.lyfta.app/api/v1/exercises/library');
        lyftaUrl.searchParams.set('page', String(page));
        lyftaUrl.searchParams.set('limit', '1000');
        const r = await fetch(lyftaUrl.toString(), {
          headers: { Authorization: `Bearer ${env.LYFTA_API_KEY}`, Accept: 'application/json' }
        });
        if (!r.ok) {
          const text = await r.text();
          return json({ error: 'Lyfta API error', status: r.status, detail: text.slice(0, 500) }, r.status, cors);
        }
        const payload = await r.json();
        const { items, shape } = extractItems(payload);
        sourceShape = sourceShape || shape;
        if (!items.length) break;
        let added = 0;
        for (const item of items) {
          const id = String(item.id ?? item.exercise_id ?? item.uuid ?? item.slug ?? JSON.stringify(item).slice(0, 120));
          if (seen.has(id)) continue;
          seen.add(id); all.push(item); added++;
        }
        const totalPages = Number(payload.total_pages ?? payload.pages ?? payload.pagination?.total_pages ?? 0);
        if (totalPages && page >= totalPages) break;
        if (!totalPages && (items.length < 1000 || added === 0)) break;
      }
      const body = json({ ok: true, count: all.length, sourceShape, exercises: all }, 200, cors);
      ctx.waitUntil(cache.put(cacheKey, body.clone()));
      return body;
    } catch (e) {
      return json({ error: e?.message || 'Unknown error' }, 500, cors);
    }
  }
};

function extractItems(payload) {
  if (Array.isArray(payload)) return { items: payload, shape: 'array' };
  for (const key of ['exercises', 'data', 'results', 'items', 'library']) {
    if (Array.isArray(payload?.[key])) return { items: payload[key], shape: key };
    if (Array.isArray(payload?.[key]?.data)) return { items: payload[key].data, shape: `${key}.data` };
    if (Array.isArray(payload?.[key]?.items)) return { items: payload[key].items, shape: `${key}.items` };
  }
  return { items: [], shape: 'unknown' };
}
function json(data, status, headers) {
  return new Response(JSON.stringify(data), { status, headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8' } });
}
