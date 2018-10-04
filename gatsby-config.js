module.exports = {
  siteMetadata: {
    title: 'Städtisches Mädchengymnasium Borbeck',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open+Sans\:400,600,700`],
      },
    },
  ],
}
