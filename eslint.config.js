import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import pluginVue from "eslint-plugin-vue"

export default [
  pluginJs.configs.recommended,
  pluginVue.configs["essential"],
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    ignores: [
      "**/dist/*",
      "**/coverage/*",
      "**/node_modules/*",
      "**/.storybook/*",
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      vue: pluginVue,
    },
    rules: {
      // Add any custom rules here
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]
