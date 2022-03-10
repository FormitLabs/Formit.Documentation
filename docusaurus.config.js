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
        title: "",
        logo: {
          alt: "Altec Insolations",
          src: "img/altecLogo.svg",
          width: "194px",
          height : "42px",
        },
        items: [
          { label: "Руководство пользователя", to: "/docs/Добро пожаловать/Как начать" },
          { label: "Методические указания", to: "/docs/Добро пожаловать/Методические указания" },
          { label: "Что нового", to: "/docs/Добро пожаловать/Методические указания"},
          { label: "Ответы на вопросы", to: "/docs/Добро пожаловать/Методические указания" }
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "AltecInsolations",
            items: [
              {
                label: "info@altecsystems.ru",
                to: "info@altecsystems.ru",
              },
            ],
          },
          {
            title: null,
            items: [
              {
                label: "Корпоративный сайт",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Из 2D в BIM",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Решение по Инсоляции КЕО",
                href: "https://twitter.com/docusaurus",
              },
              {
                label: "Разработка Altec",
                href: "https://twitter.com/",
              },
            ],
          },
          {
            title: null,
            items: [
              // {
              //   label: "Altec Systems",
              //   to: "https://altecsystems.ru/",
              // },
              // {
              //   label: "Altec Insolations",
              //   to: "https://insolations.ru/",
              // },
              {
                label: "О сервисе",
                to: "https://altecsystems.ru/",
              },
              {
                label: "Руководство",
                to: "https://altecsystems.ru/2",
              },
              {
                label: "Вопросы",
                to: "https://altecsystems.ru/3",
              },
              {
                label: "Обратная связь",
                to: "https://altecsystems.ru/4",
              },
            ],
          },
        ],
      },
      prism: {
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
