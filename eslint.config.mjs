import parser from "@typescript-eslint/parser";
import baseline from "eslint-plugin-baseline-js";

export default [
  {
    files: ["example.ts"],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: { "baseline-js": baseline },
    rules: {
      "baseline-js/use-baseline": [
        "error",
        {
          available: "widely",
          includeJsBuiltins: { preset: "type-aware" },
        },
      ],
    },
  },
];
