// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Altec Insolations Docusaurus",
  tagline: "Altec Insolations",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: 
          [
            require.resolve("./src/css/customFooter.css"),
            require.resolve("./src/css/customNavbar.css"),
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
          alt: "Altec Insolations",
          src: "img/altecLogo.svg",
          srcDark: "img/logoDark.svg",
          width: "195px",
          height: "40px",
        },
        items: [
          { label: "Руководство пользователя", to: "/docs/manual/registration", className: "nav-first-item" },
          { label: "Методические указания", to: "/docs/guidelines/possibilities", className: "nav-other-item" },
          { label: "Что нового", to: "/docs/changelog/19-12-2022", className: "nav-other-item" },
          { label: "Ответы на вопросы", to: "/docs/questions", className: "nav-other-item" },
          { label: "Корпоративный сайт", to: "https://altecsystems.ru/", className: "nav-link-item" },
          { label: "Из 2D в BIM", to: "https://altecsystems.ru/2d-to-bim", className: "nav-link-item" },
          { label: "Решение по Инсоляции и КЕО", to: "https://altecsystems.ru/insolations/", className: "nav-link-item" },
          { label: "Разработка Altec", to: "https://bim.insolations.ru/", className: "nav-link-item" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                html: `
                  <a href="#">
                    <img src="/img/logoDark.svg" >
                  </a>
                `
              },
              {
                html: `<div></div>`
              },
              {
                html: `<a class="mail-info" href="mailto:info@altecsystems.ru"><u>info@altecsystems.ru</u></a>`
              },
            ],
          },
          {
            items: [
              {
                html: `
                    <a href="https://altecsystems.ru/" class="footer-link" target="_blank"><img src="/img/linkIcon.svg" class="footer-link-image"/>Корпоративный сайт</a>
                  `,
              },
              {
                html: `
                    <a href="https://altecsystems.ru/2d-to-bim" class="footer-link" target="_blank"><img src="/img/linkIcon.svg" class="footer-link-image"/>Из 2D в BIM</a>
                  `,
              },
              {
                html: `
                    <a href="https://insolations.ru/" class="footer-link" target="_blank"><img src="/img/linkIcon.svg" class="footer-link-image"/>Решение по Инсоляции КЕО</a>
                  `,
              },
              {
                html: `
                    <a href="https://insolations.ru/" class="footer-link" target="_blank"><img src="/img/linkIcon.svg" class="footer-link-image"/>Разработка Altec</a>
                  `,
              },
            ],
          },
          {
            items: [
              {
                label: "Руководство",
                to: "/docs/manual/registration",
              },
              {
                label: "Методические указания",
                to: "/docs/guidelines/possibilities",
              },
              {
                label: "Что нового",
                to: "/docs/changelog/19-12-2022",
              },
              {
                label: "Ответы на вопросы",
                to: "/docs/questions",
              },
            ],
          },
          {
            items: [
              {
                html: `<span class="number">8 343 361-01-00</span>`
              },
              {
                html: `
                    <div class="footer-social-networks">
                      <a href="https://vk.com/public212316393" class="vk-footer" target="_blank"></a>
                      <a href="https://www.youtube.com/channel/UCgLd-rl6CpRfzbrOMMYxgBQ" class="youtube-footer" target="_blank"></a>
                      <a href="https://www.instagram.com/altecsystems/" class="ig-footer" target="_blank"></a>
                      <a href="https://t.me/altecinsolations" class="tg-footer" target="_blank"></a>
                    </div>
                  `
              },
            ],
          },
        ],
      },
    }),
};

module.exports = config;
