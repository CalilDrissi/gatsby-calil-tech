module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [`gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Kanit`,
          variants:  [ `100`,`200`,`400`,`500`, `600`, `700`, `800`, `900`]
        },
      ],
    },
  }
],
}
