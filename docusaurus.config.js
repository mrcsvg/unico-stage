// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unico Check - SDKs',
  tagline: 'Se integre com a único de forma fácil e rápida',
  url: 'https://unico-mvg.github.io',
  baseUrl: '/unico-sdkbio-docs/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'unico-mvg', // Usually your GitHub org/user name.
  projectName: 'unico-sdkbio-docs', // Usually your repo name.

  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // Options here
      docsRouteBasePath: '/',
      // language: "pt",
    }]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',   
      

      
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          routeBasePath: '/',
          remarkPlugins: [
            [simplePlantUML, {baseUrl: "https://www.plantuml.com/plantuml/svg"}]
          ]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },        
        googleAnalytics: {
          trackingID: 'UA-168684880-1',
          anonymizeIP: true,
        },
        

      }),


      
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '👻',
          lightIcon: '☀️',
          darkIconStyle: {
            marginLeft: '0px',
          },
          lightIconStyle: {
            marginRight: '3px',
          },
        },
      },


      navbar: {
        title: '',
        logo: {
          alt: 'Unico Check - SDK Docs',
          src: 'img/logo_unico.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'SDKs Docs',
          },

          // Ocultando o release notes do menu enquanto n temos o conteúdo.
          // {
          //   type: 'doc',
          //   docId: 'release-notes/whats-new',
          //   position: 'right',
          //   label: 'Release Notes',
          // },

          {
            type: 'dropdown',
            label: 'Release Notes',
            position: 'right',
            items: [
              {
                type: 'doc',
                label: 'Web SDK',
                docId: 'guias/web/release-notes',
              },
              {
                type: 'doc',
                label: 'iOS SDK',
                docId: 'guias/iOS/release-notes',
              },
              {
                type: 'doc',
                label: 'Android SDK',
                docId: 'guias/android/release-notes',
              },

              // ... more items
            ],
          },

          // {
          //   type: 'dropdown',
          //   label: 'SDK APIs',
          //   position: 'right',
          //   items: [
          //     {
          //       type: 'doc',
          //       label: 'Web SDK',
          //       docId: 'guias/web/API',
          //     },
          //     // ... more items
          //   ],
          // },


          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www3.acesso.io/identity/services/v3/docs/',
            label: 'Rest API Reference',
            position: 'right',
          },

          {
            href: 'https://github.com/acesso-io',
            label: 'GitHub',
            position: 'right',
          },


          // {
          //   type: 'search',
          //   position: 'right',
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Institucional',
            items: [
              {
                label: 'Sobre nós',
                href: 'https://unico.io/quem-somos/',
              },
              {
                label: 'Carreiras',
                href: 'https://carreiras.unico.io/',
              },
              {
                label: 'Imprensa',
                href: 'https://unico.io/',
              },
              {
                label: 'Política de privacidade e OptOut',
                href: 'https://unico.io/politica-de-privacidade/',
              },
            ],
          },
          {
            title: 'Soluções',
            items: [
              {
                label: 'unico | check',
                href: 'https://unico.io/unico-check/',
              },
              {
                label: 'unico | people',
                href: 'https://unico.io/unico-people/',
              },
            ],
          },
          {
            title: 'Blogs',
            items: [
              {
                label: 'unico | check',
                href: 'https://unico.io/unicocheck/blog',
              },
              {
                label: 'unico | people',
                href: 'https://www.unico.io/unicopeople/blog',
              },
            ],
          },
          {
            title: 'Acompanhe',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/unicoidtech',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/unicoidtech/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/acesso-digital/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/unicoidtech',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} unico. All rights reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'kotlin', 'swift'],
      },
      i18n: {
        defaultLocale: 'pt-BR',
        locales: ['pt-BR'],
      },
    }),
};

module.exports = config;
