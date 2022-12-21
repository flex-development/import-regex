/**
 * @file STATIC_IMPORT_REGEX
 * @module import-regex/static
 */

/**
 * Static `import` statement regex. Ignores matches in comments.
 *
 * @see https://regex101.com/r/wlYQUN
 * @see https://github.com/tc39/proposal-import-assertions#import-statements
 *
 * @example
 *  import { STATIC_IMPORT_REGEX } from '@flex-development/import-regex'
 *  import { dedent } from 'ts-dedent'
 *
 *  const code: string = dedent`
 *    import { defineBuildConfig } from '@flex-development/mkbuild'
 *    import type {
 *      Join,
 *      Nullable,
 *      Opaque,
 *      Simplify
 *    } from '@flex-development/tutils'
 *    import * as color from 'colorette'
 *    import consola from 'consola'
 *    import tsconfig from './tsconfig.json' assert { type: 'json' }
 *  `
 *
 *  const print = (matches: IterableIterator<RegExpMatchArray>): void => {
 *    console.debug([...matches].map(match => omit(match, ['input'])))
 *  }
 *
 *  print(code.matchAll(STATIC_IMPORT_REGEX))
 *  // [
 *  //   {
 *  //     '0': "import { defineBuildConfig } from '@flex-development/mkbuild'",
 *  //     '1': undefined,
 *  //     '2': '{ defineBuildConfig }',
 *  //     '3': '@flex-development/mkbuild',
 *  //     '4': undefined,
 *  //     index: 0,
 *  //     groups: [Object: null prototype] {
 *  //       type: undefined,
 *  //       imports: '{ defineBuildConfig }',
 *  //       specifier: '@flex-development/mkbuild',
 *  //       assertion: undefined
 *  //     }
 *  //   },
 *  //   {
 *  //     '0': 'import type {\n' +
 *  //       '  Join,\n' +
 *  //       '  Nullable,\n' +
 *  //       '  Opaque,\n' +
 *  //       '  Simplify\n' +
 *  //       "} from '@flex-development/tutils'",
 *  //     '1': 'type',
 *  //     '2': '{\n  Join,\n  Nullable,\n  Opaque,\n  Simplify\n}',
 *  //     '3': '@flex-development/tutils',
 *  //     '4': undefined,
 *  //     index: 62,
 *  //     groups: [Object: null prototype] {
 *  //       type: 'type',
 *  //       imports: '{\n  Join,\n  Nullable,\n  Opaque,\n  Simplify\n}',
 *  //       specifier: '@flex-development/tutils',
 *  //       assertion: undefined
 *  //     }
 *  //   },
 *  //   {
 *  //     '0': "import * as color from 'colorette'",
 *  //     '1': undefined,
 *  //     '2': '* as color',
 *  //     '3': 'colorette',
 *  //     '4': undefined,
 *  //     index: 151,
 *  //     groups: [Object: null prototype] {
 *  //       type: undefined,
 *  //       imports: '* as color',
 *  //       specifier: 'colorette',
 *  //       assertion: undefined
 *  //     }
 *  //   },
 *  //   {
 *  //     '0': "import consola from 'consola'",
 *  //     '1': undefined,
 *  //     '2': 'consola',
 *  //     '3': 'consola',
 *  //     '4': undefined,
 *  //     index: 186,
 *  //     groups: [Object: null prototype] {
 *  //       type: undefined,
 *  //       imports: 'consola',
 *  //       specifier: 'consola',
 *  //       assertion: undefined
 *  //     }
 *  //   },
 *  //   {
 *  //     '0': "import tsc from './tsconfig.json' assert { type: 'json' }",
 *  //     '1': undefined,
 *  //     '2': 'tsc',
 *  //     '3': './tsconfig.json',
 *  //     '4': "{ type: 'json' }",
 *  //     index: 216,
 *  //     groups: [Object: null prototype] {
 *  //       type: undefined,
 *  //       imports: 'tsc',
 *  //       specifier: './tsconfig.json',
 *  //       assertion: "{ type: 'json' }"
 *  //     }
 *  //   }
 *  // ]
 *
 * @const {RegExp} STATIC_IMPORT_REGEX
 */
const STATIC_IMPORT_REGEX: RegExp =
  /(?<!(?:\/\/|\*).*)(?<=^|[\s;])import\s*(?<type>type(?=\s+))?(?:[\s"']*(?<imports>[\w\t\n\r "$'*,/{}-]+?)\s+from\s*)?["']\s*(?<specifier>(?:(?<='\s*)[^']*[^\s'](?=\s*'))|(?:(?<="\s*)[^"]*[^\s"](?=\s*")))\s*["'](?:\s+assert\s+(?<assertion>{[\w\t\n\r "':]+?}))?(?=[\s;]*)/g

export default STATIC_IMPORT_REGEX
