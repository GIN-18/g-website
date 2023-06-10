import emoji from "markdown-it-emoji";
import anchor from "markdown-it-anchor";
import toc from "markdown-it-toc-done-right";
import hljs from "highlight.js";
import { copy } from "./copyCode";

var md = require("markdown-it")({
  html: true,
  typographer: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
          "</code></pre>"
        );
      } catch (__) { }
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

md.use(emoji).use(anchor, {}).use(toc, {}).use(copy, {});

export function markdownToHtml(markdownContent) {
  return md.render(markdownContent);
}
