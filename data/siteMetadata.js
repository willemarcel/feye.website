const siteMetadata = {
  title: 'Feye Andal',
  author: 'Feye',
  // headerTitle: 'Feye',
  // description: 'Geospatial Data, OpenStreetMap, Cooking, Fancy Stuff',
  description: 'for disaster risk and transportation management',
  // description: 'If you want to know more about me and what I do, feel free to navigate the site.',
  language: 'en-us',
  // siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  // siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  // siteLogo: '/static/images/logo.png',
  // image: '/static/images/avatar.png',
  head: '/static/images/maps.png',
  head_2nd: '/static/images/feyeandal.JPG',
  head_3rd: '/static/images/NOAH.png',
  head_4th: '/static/images/osm.png',
  // socialBanner: '/static/images/twitter-card.png',
  email: 'andalfeye@gmail.com',
  github: 'https://github.com/feyeandal',
  twitter: 'https://twitter.com/dfeyeandal',
  openstreetmap: 'https://openstreetmap.org/user/feyeandal',
  facebook: 'https://facebook.com/feyeandal',
  // youtube: 'https://youtube.com/feyeandal',
  linkedin: 'https://www.linkedin.com/in/feye-andal-29b38a76/',
  locale: 'en-US',
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: null, // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
