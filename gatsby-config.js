/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `nhistic World`,
    description: `welcome to the new World, walking in the other side.`,
    author: `@humanhistic`,
    twitterUsername: "@@humanhistic",
    image: "./static/twitter-card.png",
    siteUrl: "https://nhistic.netlify.app/",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
        ignore: [`**/\.*`],
        fastHash: true,
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "nhistic World",
        short_name: "nhistic",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        icon: "src/assets/icon.png",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-social-cards",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500
      }
    }
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "UA-215857642-1",
    //   },
    // },
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     // apiURL: process.env.API_URL || "http://localhost:1337",
    //     apiURL: process.env.API_URL || "https://nhistic-cms.herokuapp.com",
    //     queryLimit: 1000, // Default to 100
    //     // contentTypes: ["jobs","projects", "blogs"],
    //     collectionTypes: ["jobs","projects", "blogs"],
    //     singleTypes: ["about"],
    //   },
    // }
  ]
};