TRAINLY v4 — подключение каталога Lyfta

ВАЖНО: API-ключ Lyfta нельзя добавлять в app.js/config.js/GitHub.
Он хранится только как secret в Cloudflare Worker.

1. Создай Cloudflare Worker и загрузи содержимое worker/worker.js.
2. В Settings -> Variables and Secrets добавь secret:
   LYFTA_API_KEY = твой ключ Lyfta
3. Deploy.
4. Скопируй адрес Worker, например:
   https://trainly-lyfta-api.username.workers.dev
5. Открой config.js и замени:
   https://YOUR-WORKER.workers.dev
   на свой URL.
6. Загрузи все файлы Trainly v4 в GitHub Pages.
7. Открой Worker URL + /health — должно быть {"ok":true,"configured":true}.
8. Открой Worker URL + /api/library — должен вернуться JSON каталога Lyfta.

Приложение не копирует API key или изображения в GitHub. Оно отображает медиа, которые API Lyfta возвращает/ссылает на них.
