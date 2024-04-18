const BLOG = {
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5,
  THEME: process.env.NEXT_PUBLIC_THEME || 'nobelium', // 修改主题为nobelium，类似于参考链接的风格
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true, // 启用主题切换按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_SINCE || 2021,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // 设置为自动根据时间更改日夜模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  IS_TAG_COLOR_DISTINGUISHED: true,

  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || '欢迎访问我的博客！,探索更多精彩内容！',

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '您的名字',
  BIO: process.env.NEXT_PUBLIC_BIO || '这里是简介，介绍自己的一些背景和兴趣。',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://your-domain.com', // 确保使用你自己的链接
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '个人博客,技术分享,生活记录',

  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'your-email@example.com',
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/yourusername',
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || 'https://twitter.com/yourusername',

  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans font-light',
  FONT_URL: [
    'https://fonts.googleapis.com/css?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  FONT_SANS: [
    '"Noto Sans SC"',
    'sans-serif'
  ],
  FONT_SERIF: [
    'Bitter',
    '"Noto Serif SC"',
    'serif'
  ],
  FONT_AWESOME: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',

  LAYOUT_MAPPINGS: {
    '/': 'LayoutIndex',
    '/post/[slug]': 'LayoutPost',
    '/tag/[tag]': 'LayoutTag',
    '/search': 'LayoutSearch',
    '/404': 'Layout404'
  },

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

  NOTION_HOST: 'https://www.notion.so',
  BLOG_FAVICON: '/favicon.ico',

  IMAGE_COMPRESS_WIDTH: 800,
  IMAGE_ZOOM_IN_WIDTH: 1200,

  POST_SHARE_BAR_ENABLE: 'true'
}

module.exports = BLOG
