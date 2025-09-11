// src/helpers/userSetup.js

function userMarkdownSetup(md) {
  // Allow raw HTML tags (e.g., <img>, <picture>) to render instead of being escaped.
  md.set({ html: true });

  // Optional: automatically convert plain URLs into links.
  // md.set({ linkify: true });
}

function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the config instantiated in /.eleventy.js.
  // Add any custom Eleventy plugins or options here if needed.
}

module.exports = {
  userMarkdownSetup,
  userEleventySetup
};
