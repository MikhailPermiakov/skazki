const project_struct = {
  backend: {
    framework: 'elysia: https://elysiajs.com/',
    dev_runtime: 'bun: https://bun.com/docs',
    prod_runtime: 'bun: https://bun.com/docs',
    package_manager: 'npm: https://nodejs.org/en/blog/release/v24.14.0',
    container_dockerfile: 'dockerfile',
    dataBase: 'postgresql, s3' // хранение текствовых файлов (markdown), изображений (jpeg), фудиофайлов
  },
  frontend: {
    framework: 'Nuxt-4: https://nuxt.com/docs/4.x/getting-started/introduction',
    ui: 'Nuxt-Ui: https://ui.nuxt.com/docs/getting-started',
    dev_runtime: 'Node_24: https://nodejs.org/en/blog/release/v24.14.0',
    prod_runtime: 'Node_24: https://nodejs.org/en/blog/release/v24.14.0',
    package_manager: 'npm: https://nodejs.org/en/blog/release/v24.14.0',
    ssr: true,
    public: true,
    container_dockerfile: 'dockerfile',
  },
  admin_panel: {
    framework: 'Nuxt-4: https://nuxt.com/docs/4.x/getting-started/introduction',
    ui: 'Nuxt-Ui: https://ui.nuxt.com/docs/getting-started',
    editor: 'rich-editor',
    dev_runtime: 'Node_24: https://nodejs.org/en/blog/release/v24.14.0',
    prod_runtime: 'Node_24: https://nodejs.org/en/blog/release/v24.14.0',
    package_manager: 'npm: https://nodejs.org/en/blog/release/v24.14.0',
    ssr: false,
    public: false,
    container_dockerfile: 'dockerfile',
  },
  shared: {
    types: 'from elysia for frontend and admin_panel',
    package_shared: 'npm: https://nodejs.org/en/blog/release/v24.14.0',
  },
  orchestration: [
    'docker_compose',
    'vite',
  ]
}

// Хочу создать веб приложение для чтения текста и прослушивания аудио. "Читать и слушать сказки". 1. сайт - интерфейс как у электронной книги. Главная страница (ssr: true) предлагает список книг, и возможность поиска по автору и названию. Вторая страница (ssr: false) - непосредственно сам интерфейс электронной книги, можно менять тему светлая/темная, изменять размер шрифта. 1 страница = один файл (текст + изображения (если есть) + аудиофайл, дублирующий текст на этой странице). Пользователь может читать текст или включить аудиофайл и просто слушать что написано на этой странице. 2. админ-панель - две роли (супер-админ, админ), супер-админ может создавать и удалять админов. - основной функционал - загрузка (или печать) текста, изображений, аудиофайлов. Создание, изменение, удаление файлов (страниц) для книг. Проанализируй прикрепленный файл и мой текст, составь пошаговую инструкцию по сборке этого проекта без углубления в то, как именно писать интерфейс сайта и админ панели.