# Baseline checks demo

Check JavaScript built-in APIs against Baseline Widely available with
[TypeScript](https://github.com/3ru/TypeScript-Baseline-lib-generator) and
[ESLint](https://github.com/3ru/eslint-plugin-baseline-js), in your editor and CI.

## Run the checks

Use Node 24 or later.

```sh
git clone https://github.com/3ru/baseline-checks-demo.git
cd baseline-checks-demo
npm ci
npm run lint
npm run typecheck
```

Both checks pass on `main`. [example.ts](example.ts) removes excluded values
from a Set using widely available APIs.

## See CI catch an unsupported API

[PR #1](https://github.com/3ru/baseline-checks-demo/pull/1) replaces the result with:

```ts
export const remaining = selected.difference(excluded);
```

`difference()` is outside the pinned Baseline target, so the separate TypeScript
and ESLint jobs both fail. Keep the PR open as the failing example.

In VS Code, install the ESLint extension and select **Use Workspace Version** for
TypeScript. Open `example.ts` on the PR branch to see both errors.

[tsconfig.json](tsconfig.json) restricts TypeScript to Baseline APIs.
[eslint.config.mjs](eslint.config.mjs) applies the same target; its separate
[tsconfig.eslint.json](tsconfig.eslint.json) retains full types to identify newer APIs.

Versions are pinned in `package.json` and `package-lock.json`: Baseline lib 0.1.1
(snapshot: 2026-10-02) and ESLint plugin 0.7.4 (web-features 3.40.0).
TypeScript 6.0.3 matches the ESLint parser's supported versions.
