TRAINLY PWA v6

1. Upload all files/folders from this directory to the root of your GitHub Pages repository.
2. config.js is already configured for:
   https://trainly-lyfta-api.karambafuze.workers.dev
3. Cloudflare Worker must contain worker/worker.js and have Secret:
   LYFTA_API_KEY = your Lyfta API key
4. The app loads the whole Lyfta catalog in batches of 100, respecting the 60 requests/minute limit.
   First full sync can take about 1.5 minutes. The app caches the normalized catalog locally for 24 hours when browser storage allows.
5. v6 no longer mixes the old built-in demo exercises into the Lyfta catalog.
6. Manual results can be added from an exercise page without starting a workout.
7. Exercise order in workout editor can be changed by dragging the ≡ handle.

If an old PWA version remains on iPhone, remove the Home Screen icon and open the GitHub Pages URL in Safari once, then add it to Home Screen again.
