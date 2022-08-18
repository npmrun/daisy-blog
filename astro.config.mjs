import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// https://github.com/withastro/astro/blob/main/examples/blog/src/pages/rss.xml.js
// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [
        'rehype-slug',
        [
          'rehype-autolink-headings',
          {
            behavior: 'wrap',
          },
        ],
      ],
      shikiConfig: {
        theme: 'poimandres',
        langs: [],
        wrap: false,
      },
    },
    site: 'https://art.xieyaxin.top/',
    integrations: [sitemap()],
  }
);
