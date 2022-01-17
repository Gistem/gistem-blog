module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    emcaFeatures: { jsx: true },
  },
  extends: ["prettier/@typescript-eslint", "plugin:prettier/recommended"],
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      version: "detect",
    },
    env: {
      node: true,
      browser: true,
    },
  },
};
