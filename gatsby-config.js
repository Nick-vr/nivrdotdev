module.exports = {
  siteMetadata: {
    title: `Nivr`,
    titleTemplate: `%s . Nick`,
    description: `Portfolio website by Nick Van Royen`,
    url: `https://www.nivr.dev`,
    author: `@Nickvr_`,
    twitterUsername: `@Nickvr_`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `nivr`,
        short_name: `nivr`,
        start_url: `/`,
        background_color: `#151515`,
        theme_color: `#151515`,
        display: `minimal-ui`,
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
