// src/helpers/userSetup.js

function useMarkdownSetup(md) {
  // Allow raw HTML tags (e.g., <img>, <picture>) to render instead of being escaped.
  md.set({ html: true });

  // Optional: auto-link plain URLs
  // md.set({ linkify: true });
}

function userEleventySetup(eleventyConfig) {
  // Add Eleventy customizations here if needed.
}

// Export BOTH hook names for compatibility with different templates
module.exports = {
  useMarkdownSetup,               // some templates call this
  userMarkdownSetup: useMarkdownSetup, // others call this
  userEleventySetup,
};
