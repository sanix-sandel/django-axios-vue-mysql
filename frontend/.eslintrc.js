module.exports = {
    root: true,
    env: {
      node: true,
      browser: true
    },
    extends: [
      "plugin:vue/recommended",
      "eslint:recommended",
      "prettier/vue",
      "plugin:prettier/recommended"
    ],
    rules: {
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-unused-vars": ['error', {
        "args": "none"
      }],
    },

    globals: {
      $nuxt: true
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  };
  