// noinspection JSCheckFunctionSignatures

const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * NuxtJs apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */
module.exports = {
  extends: [
    "@nuxtjs/eslint-config-typescript"
  ].map(require.resolve),
  parserOptions: {
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.cjs", "nuxt.config.ts"],
  rules: {
    "comma-dangle": "off",
    // semi: "off",
    "no-undef": "off",
    "eslint-comments/require-description": "off",
    "unicorn/filename-case": "off",
    "no-case-declarations": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // add specific rules configurations here
    semi: ["error", "never"],
    quotes: ["error", "double"],
  },
};
