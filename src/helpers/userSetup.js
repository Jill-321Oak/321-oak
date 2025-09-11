 function userMarkdownSetup(md) {
-  // The md parameter stands for the markdown-it instance used throughout the site generator.
-  // Feel free to add any plugin you want here instead of /.eleventy.js
+  // Allow raw HTML tags (e.g., <img>, <picture>) to render instead of being escaped.
+  md.set({ html: true });
+
+  // If you want automatic link detection later, you can also enable:
+  // md.set({ linkify: true });
 }
 function userEleventySetup(eleventyConfig) {
   // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
   // Feel free to add any plugin you want here instead of /.eleventy.js
 }
 exports.userMarkdownSetup = userMarkdownSetup;
 exports.userEleventySetup = userEleventySetup;
