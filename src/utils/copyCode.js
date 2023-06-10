import lodash from "lodash";

try {
  // Node js will throw an error
  this === window;

  const Clipboard = require("clipboard");
  new Clipboard(".markdown-it-code-copy");
} catch (err) { throw err; }

const defaultOptions = {
  buttonStyle:
    "position: absolute; top: 6px; right: 6px; cursor: pointer; outline: none;",
};

function renderCode(origRule, options) {
  options = lodash.merge(defaultOptions, options);
  return (...args) => {
    const [tokens, idx] = args;
    const content = tokens[idx].content
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&lt;");
    const origRendered = origRule(...args);

    if (content.length === 0) return origRendered;

    return `
      <div style="position: relative">
        ${origRendered}
        <button class="markdown-it-code-copy" data-clipboard-text="${content}" style="${options.buttonStyle}" title="Copy">
          <span>
            <svg
              t="1686376854058"
              class="fill-ctp-overlay1"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4625"
              width="18"
              height="18"
            >
              <path
                d="M938.1 183.7C934.9 81.9 851.6 0 749.1 0H189.5C85 0 0 85 0 189.6v559.5C0 851.6 81.9 934.8 183.6 938c22.8 50.6 73.4 85.9 132.4 85.9h562.5c80.3 0 145.4-65.1 145.4-145.4V316.1c0.1-59.1-35.2-109.7-85.8-132.4zM85.3 749.1V189.6c0-57.5 46.8-104.3 104.2-104.3H749c51 0 93.4 36.9 102.3 85.4H316.1c-80.3 0-145.4 65.1-145.4 145.4v535.3c-48.5-8.9-85.4-51.3-85.4-102.3z m853.4 129.5c0 33.1-27 60.1-60.1 60.1H316.1c-33.1 0-60.1-27-60.1-60.1V316.1c0-33.1 27-60.1 60.1-60.1h562.5c33.1 0 60.1 27 60.1 60.1v562.5z"
                p-id="4626"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    `;
  };
}

export function copy(md, options) {
  md.renderer.rules.code_block = renderCode(
    md.renderer.rules.code_block,
    options
  );
  md.renderer.rules.fence = renderCode(md.renderer.rules.fence, options);
}
