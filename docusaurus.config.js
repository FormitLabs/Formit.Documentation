// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Insolations docusaurus",
  tagline: "Dinosaurs are cool",
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
          customCss: require.resolve("./src/css/custom.css"),
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
          { label: "Руководство пользователя", to: "/docs/Добро пожаловать/Руководство", className: "nav-first-item" },
          { label: "Методические указания", to: "/docs/Добро пожаловать/Методические указания", className: "nav-other-item" },
          { label: "Что нового", to: "/docs/Добро пожаловать/Методические указания", className: "nav-other-item" },
          { label: "Ответы на вопросы", to: "/docs/Добро пожаловать/Методические указания", className: "nav-other-item" }
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
                    <img src="./img/logoDark.svg" >
                  </a>
                `
              },
              {
                html: `<div class="mail-info"><u>info@altecsystems.ru</u></div>`
              },
            ],
          },
          {
            items: [
              {
                html: `
                    <a href="https://altecsystems.ru/" class="footer-link" target="_blank"><img src="./img/linkIcon.svg" class="footer-link-image"/>Корпоративный сайт</a>
                  `,
              },
              {
                html: `
                    <a href="https://altecsystems.ru/2d-to-bim" class="footer-link" target="_blank"><img src="./img/linkIcon.svg" class="footer-link-image"/>Из 2D в BIM</a>
                  `,
              },
              {
                html: `
                    <a href="https://insolations.ru/" class="footer-link" target="_blank"><img src="./img/linkIcon.svg" class="footer-link-image"/>Решение по Инсоляции КЕО</a>
                  `,
              },
              {
                html: `
                    <a href="https://insolations.ru/" class="footer-link" target="_blank"><img src="./img/linkIcon.svg" class="footer-link-image"/>Разработка Altec</a>
                  `,
              },
            ],
          },
          {
            items: [
              {
                label: "Руководство",
                to: "/docs/Добро пожаловать/Руководство",
              },
              {
                label: "Методические указания",
                to: "/docs/Добро пожаловать/Методические указания",
              },
              {
                label: "Что нового",
                to: "/docs/Добро пожаловать/",
              },
              {
                label: "Ответы на вопросы",
                to: "/docs/Добро пожаловать/Как начать",
              },
            ],
          },
          {
            items: [
              {
                html: `<span class="number">8 800 301-81-97</span>`
              },
              {
                html: `<span class="number">8 343 247-24-04</span>`
              },
              {
                html: `
                    <div class="footer-social-networks">
                      <a href="https://www.youtube.com/channel/UCgLd-rl6CpRfzbrOMMYxgBQ" target="_blank">
                        <img src="./img/youtube-footer.svg" />
                      </a>
                      <a href="https://www.instagram.com/altecsystems/" target="_blank">
                        <img src="./img/ig-footer.svg" />
                      </a>
                      <a href="https://telegram.org/" target="_blank">
                        <img src="./img/tg-footer.svg" />
                      </a>
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
