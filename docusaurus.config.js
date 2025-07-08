// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AltecInsolations Docs",
  tagline: "AltecInsolations",
  url: "https://docs.formit.pro/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "formit",
  projectName: "amaterasu.documentation",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          exclude: ["**/_*", "**/_*/**"],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [
            require.resolve("./src/css/customFooter.css"),
            require.resolve("./src/css/customNavbar.css"),
            require.resolve("./src/css/customSidebar.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Formit",
          src: "img/formit-square-logo.svg",
          width: "auto",
          height: "auto",
        },
        items: [
          {
            label: "Руководство пользователя",
            to: "/docs/manual/registration",
            className: "nav-first-item",
          },
          {
            label: "Методические указания",
            to: "/docs/guidelines/possibilities",
            className: "nav-other-item",
          },
          {
            label: "Концепция",
            to: "/docs/conception",
            className: "nav-other-item",
          },
          {
            label: "Что нового",
            to: "/docs/changelog/latest",
            className: "nav-other-item",
          },
          // { label: "Ответы на вопросы", to: "/docs/questions", className: "nav-other-item" },
          // TODO: раньше отображалось только в мобильной версии сайта, теперь не отображается нигде
          /* {
            label: "Корпоративный сайт",
            to: "https://altecsystems.ru/",
            className: "nav-link-item",
          },
          {
            label: "Из 2D в BIM",
            to: "https://altecsystems.ru/2d-to-bim",
            className: "nav-link-item",
          },
          {
            label: "Решение по Инсоляции и КЕО",
            to: "https://altecsystems.ru/insolations/",
            className: "nav-link-item",
          },
          {
            label: "Разработка Altec",
            to: "https://bim.insolations.ru/",
            className: "nav-link-item",
          },*/
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                html: `
                  <a href="/">
                    <img src="/img/formit-text-white.svg" alt="Логотип компании Formit" height="40px" width="auto" >
                  </a>
                `,
              },
              {
                html: `<div></div>`,
              },
              {
                html: `
                  <a class="mail-info" href="mailto:info@formit.pro">
                    <u>info@formit.pro</u>
                  </a>`,
              },
            ],
          },
          // TODO: после реализации нового лендинга и окончания разбирательств с корпоративным сайтом обновить данные ссылки
          // {
          //   items: [
          //     {
          //       html: `
          //           <a href="https://altecsystems.ru/" class="footer-link" target="_blank" rel="noopener noreferrer">
          //             <img src="/img/linkIcon.svg" alt="Изображение сторонней ссылки" class="footer-link-image"/>Корпоративный сайт
          //           </a>
          //         `,
          //     },
          //     {
          //       html: `
          //           <a href="https://altecsystems.ru/2d-to-bim" class="footer-link" target="_blank" rel="noopener noreferrer">
          //             <img src="/img/linkIcon.svg" alt="Изображение сторонней ссылки" class="footer-link-image"/>Из 2D в BIM
          //           </a>
          //         `,
          //     },
          //     {
          //       html: `
          //           <a href="https://altecsystems.ru/insolations/" class="footer-link" target="_blank" rel="noopener noreferrer">
          //             <img src="/img/linkIcon.svg" alt="Изображение сторонней ссылки" class="footer-link-image"/>Решение по Инсоляции КЕО
          //           </a>
          //         `,
          //     },
          //     {
          //       html: `
          //           <a href="https://bim.insolations.ru/" class="footer-link" target="_blank" rel="noopener noreferrer">
          //             <img src="/img/linkIcon.svg" alt="Изображение сторонней ссылки" class="footer-link-image"/>Разработка Altec
          //           </a>
          //         `,
          //     },
          //   ],
          // },
          {
            items: [
              { label: "Руководство", to: "/docs/manual/registration" },
              {
                label: "Методические указания",
                to: "/docs/guidelines/possibilities",
              },
              { label: "Концепция", to: "/docs/conception" },
              { label: "Что нового", to: "/docs/changelog/latest" },
              // { label: "Ответы на вопросы", to: "/docs/questions" },
            ],
          },
          {
            items: [
              {
                // TODO: возможно номер телефона устарел
                html: `<a class="phone-number" href="tel:+73433610100">8 343 361-01-00</a>`,
              },
              {
                // TODO: почему у нас ничего нет кроме тг?
                /*html: `
                    <div class="footer-social-networks">
                      <a href="https://vk.com/public212316393"  class="vk-footer" target="_blank" rel="noopener noreferrer"></a>
                      <a href="https://www.youtube.com/channel/UCgLd-rl6CpRfzbrOMMYxgBQ" class="youtube-footer" target="_blank" rel="noopener noreferrer"></a>
                      <a href="https://www.instagram.com/altecsystems/" class="ig-footer" target="_blank" rel="noopener noreferrer"></a>
                      <a href="https://t.me/altecformit" class="tg-footer" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                  `,*/
                html: `
                    <div class="footer-social-networks">                   
                      <a href="https://t.me/altecformit" class="tg-footer" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                  `,
              },
            ],
          },
        ],
      },
    }),
};

module.exports = config;
