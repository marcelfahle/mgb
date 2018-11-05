module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Städtisches Mädchengymnasium Borbeck',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open+Sans\:400,600,700`],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `e1b558a35bdc2c29b5d03ac6df6ab1`,
        previewMode: false,
        disableLiveReload: false,
      },
    },
  ],
}
