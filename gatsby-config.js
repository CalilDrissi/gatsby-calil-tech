module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [`gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-plugin-google-fonts-v2`,
    options: {
      fonts: [
        {
          family: `Kanit:wght@100,200,300;400;500;600;700,800`,
        }
      
      ]
    }
  },
],
}
