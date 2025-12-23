import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Bridgeway Bible Institute',
  tagline: '말씀으로 세워가는 믿음의 여정',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://smlee729.github.io',
  baseUrl: '/bbi/',

  organizationName: 'smlee729',
  projectName: 'bbi',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      return result;
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'genesis',
        path: 'genesis',
        routeBasePath: 'genesis',
        sidebarPath: './sidebars/genesis.ts',
        editUrl: 'https://github.com/smlee729/bbi/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nt-intro',
        path: 'nt-intro',
        routeBasePath: 'nt-intro',
        sidebarPath: './sidebars/nt-intro.ts',
        editUrl: 'https://github.com/smlee729/bbi/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'basic-doctrine',
        path: 'basic-doctrine',
        routeBasePath: 'basic-doctrine',
        sidebarPath: './sidebars/basic-doctrine.ts',
        editUrl: 'https://github.com/smlee729/bbi/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'discipleship',
        path: 'discipleship',
        routeBasePath: 'discipleship',
        sidebarPath: './sidebars/discipleship.ts',
        editUrl: 'https://github.com/smlee729/bbi/tree/main/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/bbi-social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Bridgeway Bible Institute',
      logo: {
        alt: 'BBI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/genesis/intro',
          label: '창세기 강해',
          position: 'left',
          activeBaseRegex: '/genesis/',
        },
        {
          to: '/nt-intro/intro',
          label: '신약개론',
          position: 'left',
          activeBaseRegex: '/nt-intro/',
        },
        {
          to: '/basic-doctrine/intro',
          label: '기초교리',
          position: 'left',
          activeBaseRegex: '/basic-doctrine/',
        },
        {
          to: '/discipleship/intro',
          label: '제자훈련',
          position: 'left',
          activeBaseRegex: '/discipleship/',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '성경공부',
          items: [
            {
              label: '창세기 강해',
              to: '/genesis/intro',
            },
            {
              label: '신약개론',
              to: '/nt-intro/intro',
            },
            {
              label: '기초교리',
              to: '/basic-doctrine/intro',
            },
            {
              label: '제자훈련',
              to: '/discipleship/intro',
            },
          ],
        },
        {
          title: '안내',
          items: [
            {
              label: '소개',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bridgeway Bible Institute.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
