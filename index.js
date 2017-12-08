"use strict";

module.exports = {
  "plugins": [
    "stylelint-declaration-use-variable",
    "stylelint-scss"
  ],
  "rules": {
    "block-no-empty": true,
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "declaration-bang-space-before": "always",
    "declaration-bang-space-after": "never",
    "declaration-block-no-duplicate-properties": [true, {
      "ignore": ["consecutive-duplicates"]
    }],
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,
    "declaration-property-value-blacklist": {
      "/^border/": ["none"]
    },
    "function-comma-space-after": "always",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "indentation": 2,
    "length-zero-no-unit": true,
    "max-nesting-depth": 4,
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "property-no-unknown": true,
    "selector-class-pattern": "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "selector-list-comma-newline-after": "always",
    "selector-no-qualifying-type": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "selector-pseudo-element-colon-notation": "double",
    "sh-waqar/declaration-use-variable": "color",
    "shorthand-property-no-redundant-values": true,
    "string-quotes": "single",
    "unit-whitelist": [
      "ch", "em", "ex", "rem",
      "cm", "in", "mm", "pc", "pt", "px", "q",
      "vh", "vw", "vmin", "vmax",
      "deg", "grad", "rad", "turn",
      "ms", "s",
      "Hz", "kHz",
      "dpi", "dpcm", "dppx",
      "%"
    ]
  }
};
