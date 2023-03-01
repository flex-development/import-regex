/**
 * @file DYNAMIC_IMPORT_REGEX
 * @module import-regex/dynamic
 */

/**
 * Dynamic `import` statement regex. Ignores matches in comments.
 *
 * **Note**: Requires unicode support ([flag `u`][1]).
 *
 * [1]: https://javascript.info/regexp-unicode
 *
 * @see https://regex101.com/r/PTPAvU
 * @see https://github.com/tc39/proposal-import-assertions#dynamic-import
 *
 * @example
 *  import { DYNAMIC_IMPORT_REGEX } from '@flex-development/import-regex'
 *  import { dedent } from 'ts-dedent'
 *
 *  const code: string = dedent`
 *    await import('./side-effect.mjs')
 *    await import(specifier)
 *    import('foo.json', { assert: { type: 'json' } })
 *  `
 *
 *  const print = (matches: IterableIterator<RegExpMatchArray>): void => {
 *    console.debug([...matches].map(match => omit(match, ['input'])))
 *  }
 *
 *  print(code.matchAll(DYNAMIC_IMPORT_REGEX))
 *  //  [
 *  //   {
 *  //     '0': "await import('./side-effect.mjs')",
 *  //     '1': undefined,
 *  //     '2': "import('./side-effect.mjs')",
 *  //     '3': "'./side-effect.mjs'",
 *  //     '4': undefined,
 *  //     index: 0,
 *  //     groups: [Object: null prototype] {
 *  //       imports: undefined,
 *  //       expression: "import('./side-effect.mjs')",
 *  //       specifier: "'./side-effect.mjs'",
 *  //       options: undefined
 *  //     }
 *  //   },
 *  //   {
 *  //     '0': 'await import(specifier)',
 *  //     '1': undefined,
 *  //     '2': 'import(specifier)',
 *  //     '3': 'specifier',
 *  //     '4': undefined,
 *  //     index: 34,
 *  //     groups: [Object: null prototype] {
 *  //       imports: undefined,
 *  //       expression: 'import(specifier)',
 *  //       specifier: 'specifier',
 *  //       options: undefined
 *  //     }
 *  //   },
 *  //   {
 *  //     '0': "import('foo.json', { assert: { type: 'json' } })",
 *  //     '1': undefined,
 *  //     '2': "import('foo.json', { assert: { type: 'json' } })",
 *  //     '3': "'foo.json'",
 *  //     '4': "{ assert: { type: 'json' } }",
 *  //     index: 58,
 *  //     groups: [Object: null prototype] {
 *  //       imports: undefined,
 *  //       expression: "import('foo.json', { assert: { type: 'json' } })",
 *  //       specifier: "'foo.json'",
 *  //       options: "{ assert: { type: 'json' } }"
 *  //     }
 *  //   }
 *  // ]
 *
 * @const {RegExp} DYNAMIC_IMPORT_REGEX
 */
const DYNAMIC_IMPORT_REGEX: RegExp =
  /(?<=^|[\n;](?:[\t ]*(?:\w+ )?)?)(?:(?:const\s*|let\s*|var\s*)?(?<imports>(?:[$_\p{ID_Start}][$\u200C\u200D\p{ID_Continue}]*)|(?<=const\s*|let\s*|var\s*)(?:[\w\t\n\r "$'*,./:{}-]+?))\s*=\s*)?(?:await\s+)?(?<expression>import\((?<specifier>[\S\t\n\r]+?)(?:,\s*(?<options>\{\s*assert:.+[\w\t\n\r "':]+\}\s*\}))?\))/gu

export default DYNAMIC_IMPORT_REGEX
