import rss from '@astrojs/rss';
import { siteInfo } from '@data/site';

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: siteInfo.siteName,
    description: siteInfo.siteDesc,
    stylesheet: true,
    customData: `<language>${siteInfo.lang || 'en-us'}</language>`,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.desc,
    })),
  });
