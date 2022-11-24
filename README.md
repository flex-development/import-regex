# import-regex

[![npm](https://img.shields.io/npm/v/@flex-development/import-regex.svg)](https://npmjs.com/package/@flex-development/import-regex)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/import-regex.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![github actions](http://img.shields.io/badge/-github%20actions-2088ff?style=flat&logo=github-actions&logoColor=ffffff)](https://github.com/features/actions)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

`import` statement regex.

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Types](#types)
- [Contribute](#contribute)

## What is this?

This package contains regular expressions for matching [dynamic][1] and [static][2] `import` statements.

## When should I use this?

Use this package when you need to match dynamic or static `import` statements.

**Note**:

- Statements in docblock (`/** */`), multiline (`/* */`), and single-line (`//`) comments are ignored
- Regular expressions are ECMAScript-compatible. They have **not** been tested with other flavors (PCRE, PCRE2, etc)

## Install

This package is [ESM only][3].

```sh
yarn add @flex-development/import-regex
```

From Git:

```sh
yarn add @flex-development/import-regex@flex-development/import-regex
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/features/protocols#git'>Git - Protocols | Yarn</a>
    &nbsp;for details on requesting a specific branch, commit, or tag.
  </small>
</blockquote>

## Use

**TODO**: Update documentation.

## API

**TODO**: Update documentation.

## Types

This package is fully typed with [TypeScript][4].

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import
[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import
[3]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[4]: https://www.typescriptlang.org
