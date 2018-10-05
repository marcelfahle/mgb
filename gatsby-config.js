module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Städtisches Mädchengymnasium Borbeck',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open+Sans\:400,600,700`],
      },
    },
  ],
}
