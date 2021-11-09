// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Unico Check - SDKs',
  tagline: 'Se integre com a único de forma fácil e rápida',
  url: 'https://mrcsvg.github.io',
  baseUrl: '/unico-sdkbio-docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'mrcsvg', // Usually your GitHub org/user name.
  projectName: 'unico-sdkbio-docs', // Usually your repo name.

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
          routeBasePath: '/'
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            position: 'left',
            label: 'SDKs Unico | Check',
          },
        
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      i18n: {
        defaultLocale: 'pt-BR',
        locales: ['pt-BR'],
      },
    }),
};

module.exports = config;
