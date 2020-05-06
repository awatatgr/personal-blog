require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {


    // Used for the title template on pages other than the index site
    siteTitle: `awata_tgr`,
    // Default title of the page
    siteTitleAlt: `mind of awata_tgr`,
    // Can be used for e.g. JSONLD
    siteHeadline: `thought of awata_tgr`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://togaru.org`,
    // Used for SEO
    siteDescription: `thought of awata_tgr`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@awata_tgr`,

  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/awata_tgr`,
          },
        //  {
        //    name: `Instagram`,
        //  url: `https://www.instagram.com/awata_tgr/`,
        //  },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/kentaroh-a-04130a26/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
