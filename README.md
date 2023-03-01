# import-regex

[![npm](https://img.shields.io/npm/v/@flex-development/import-regex.svg)](https://npmjs.com/package/@flex-development/import-regex)
[![codecov](https://codecov.io/github/flex-development/import-regex/branch/main/graph/badge.svg?token=2FBWJR3AKR)](https://codecov.io/github/flex-development/import-regex)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/import-regex.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
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
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This package contains regular expressions for matching [dynamic][1] and [static][2] `import` statements.

## When should I use this?

Use this package when you need to match dynamic or static `import` statements.

**Note**:

- Statements in docblock (`/** */`), multiline (`/* */`), and single-line (`//`) comments are ignored
- Expressions are ECMAScript-compatible. They have **not** been tested with other flavors (PCRE, PCRE2, etc)

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

Suppose we have the following module:

```ts
import * as regexp from '@flex-development/import-regex'
import { omit } from 'radash'
import { dedent } from 'ts-dedent'

const code: string = dedent`
  import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
  import type {
    Join,
    Nullable,
    Opaque,
    Simplify
  } from '@flex-development/tutils'
  import * as color from 'colorette'
  import consola from 'consola'
  import tsconfig from './tsconfig.json' assert { type: 'json' }

  const { readPackage } = await import('read-pkg')

  const se2 = 'side-effect-2.mjs'

  await import('./side-effect.mjs')
  await import(se2)
`

const print = (matches: IterableIterator<RegExpMatchArray>): void => {
  console.debug([...matches].map(match => omit(match, ['input'])))
}

print(code.matchAll(regexp.STATIC_IMPORT_REGEX))
print(code.matchAll(regexp.DYNAMIC_IMPORT_REGEX))
```

...running that yields:

```sh
[
  {
    '0': "import { defineBuildConfig, type Config } from '@flex-development/mkbuild'",
    '1': undefined,
    '2': '{ defineBuildConfig, type Config }',
    '3': '@flex-development/mkbuild',
    '4': undefined,
    index: 0,
    groups: [Object: null prototype] {
      type: undefined,
      imports: '{ defineBuildConfig, type Config }',
      specifier: '@flex-development/mkbuild',
      assertion: undefined
    }
  },
  {
    '0': 'import type {\n' +
      '  Join,\n' +
      '  Nullable,\n' +
      '  Opaque,\n' +
      '  Simplify\n' +
      "} from '@flex-development/tutils'",
    '1': 'type',
    '2': '{\n  Join,\n  Nullable,\n  Opaque,\n  Simplify\n}',
    '3': '@flex-development/tutils',
    '4': undefined,
    index: 75,
    groups: [Object: null prototype] {
      type: 'type',
      imports: '{\n  Join,\n  Nullable,\n  Opaque,\n  Simplify\n}',
      specifier: '@flex-development/tutils',
      assertion: undefined
    }
  },
  {
    '0': "import * as color from 'colorette'",
    '1': undefined,
    '2': '* as color',
    '3': 'colorette',
    '4': undefined,
    index: 164,
    groups: [Object: null prototype] {
      type: undefined,
      imports: '* as color',
      specifier: 'colorette',
      assertion: undefined
    }
  },
  {
    '0': "import consola from 'consola'",
    '1': undefined,
    '2': 'consola',
    '3': 'consola',
    '4': undefined,
    index: 199,
    groups: [Object: null prototype] {
      type: undefined,
      imports: 'consola',
      specifier: 'consola',
      assertion: undefined
    }
  },
  {
    '0': "import tsconfig from './tsconfig.json' assert { type: 'json' }",
    '1': undefined,
    '2': 'tsconfig',
    '3': './tsconfig.json',
    '4': "{ type: 'json' }",
    index: 229,
    groups: [Object: null prototype] {
      type: undefined,
      imports: 'tsconfig',
      specifier: './tsconfig.json',
      assertion: "{ type: 'json' }"
    }
  }
]
[
  {
    '0': "const { readPackage } = await import('read-pkg')",
    '1': '{ readPackage }',
    '2': "import('read-pkg')",
    '3': "'read-pkg'",
    '4': undefined,
    index: 293,
    groups: [Object: null prototype] {
      imports: '{ readPackage }',
      expression: "import('read-pkg')",
      specifier: "'read-pkg'",
      options: undefined
    }
  },
  {
    '0': "await import('./side-effect.mjs')",
    '1': undefined,
    '2': "import('./side-effect.mjs')",
    '3': "'./side-effect.mjs'",
    '4': undefined,
    index: 376,
    groups: [Object: null prototype] {
      imports: undefined,
      expression: "import('./side-effect.mjs')",
      specifier: "'./side-effect.mjs'",
      options: undefined
    }
  },
  {
    '0': 'await import(se2)',
    '1': undefined,
    '2': 'import(se2)',
    '3': 'se2',
    '4': undefined,
    index: 410,
    groups: [Object: null prototype] {
      imports: undefined,
      expression: 'import(se2)',
      specifier: 'se2',
      options: undefined
    }
  }
]
```

## API

This package exports the identifiers `DYNAMIC_IMPORT_REGEX` and `STATIC_IMPORT_REGEX`.

There is no default export.

### `DYNAMIC_IMPORT_REGEX`

- **Source**: [`src/import-dynamic.ts`](src/import-dynamic.ts)

Dynamic `import` statement regex. Ignores matches in comments.

**Requires unicode support ([flag `u`][4])**.

### `STATIC_IMPORT_REGEX`

- **Source**: [`src/import-static.ts`](src/import-static.ts)

Static `import` statement regex. Ignores matches in comments.

## Types

This package is fully typed with [TypeScript][5].

## Related

- [`export-regex`][6] &mdash; `export` statement regex

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import
[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import
[3]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[4]: https://javascript.info/regexp-unicode
[5]: https://www.typescriptlang.org
[6]: https://github.com/flex-development/export-regex
