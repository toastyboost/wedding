import { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: false,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`JetBrains Mono\:400,700`, `Roboto:400,700,900`],
        display: 'swap',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: "gatsby-plugin-react-intl",
      options: {
        path: `${__dirname}/src/libs/translations`,
        languages: ["en", "ru"],
        defaultLanguage: "en",
        fallbackLanguage: "en",
        redirect: true,
        redirectDefaultLanguageToRoot: false,
      },
    },
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

export default config
