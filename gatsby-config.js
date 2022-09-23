require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "services-offered",
      populate: {
        graphics: "*",
        button_icon: "*",
        content_image: "*",
      },
    },
    { singularName: "about-us-team-member" },
    { singularName: "about-us-objective" },
  ],
  singleTypes: ["about-us-what-is-vi-serdac", "footer", "home-page"],
};

module.exports = {
  siteMetadata: {
    title: `ViSERDAC`,
    siteUrl: `https://www.yourdomain.tld`,
    image: `./src/images/ViSERDAC-Favicon.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ViSERDAC`,
        short_name: `ViSERDAC`,
        start_url: `/`,
        background_color: `#ffecde`,
        theme_color: `#003D00`,
        display: `standalone`,
        icon: "./src/images/ViSERDAC-Favicon.png",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    `gatsby-plugin-transition-link`,
    "gatsby-plugin-mailgo",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:200,300,400,500,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
