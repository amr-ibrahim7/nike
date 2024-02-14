/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
  reactStrictMode: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
