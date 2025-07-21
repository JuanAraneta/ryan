import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import eslintPluginUnicorn from "eslint-plugin-unicorn"
import tailwind from "eslint-plugin-tailwindcss"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { ignores: [".next/**", "public/**", "next.config.js", "postcss.config.js"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginUnicorn.configs["flat/recommended"],
  ...tailwind.configs["flat/recommended"],
  ...compat.config({
    extends: ["next"],
    settings: {
      next: {
        rootDir: ".",
      },
    },
  }),
  {
    rules: {
      "no-undef": "error",
      "react/react-in-jsx-scope": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "off",
      "@typescript-eslint/no-unused-vars": [
        "error", // or "error"
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/prefer-top-level-await": "off",
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: {
        React: "writable",
      },
    },
    rules: {
      "no-console": "warn",
      "one-var": ["error", "never"],
    },
  },
]
export default config
