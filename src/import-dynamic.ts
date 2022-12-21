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
 *
 * @const {RegExp} DYNAMIC_IMPORT_REGEX
 */
const DYNAMIC_IMPORT_REGEX: RegExp =
  /(?<=^|[\s;])(?:(?:const\s*|let\s*|var\s*)?(?<imports>(?:[$_\p{ID_Start}][$\u200C\u200D\p{ID_Continue}]*)|(?<=const\s*|let\s*|var\s*)(?:[\w\t\n\r "$'*,./:{}-]+?))\s*=\s*)?(?:await\s+)?(?<expression>import\((?<specifier>[\S\t\n\r]+?)(?:,\s*(?<options>\{\s*assert:.+[\w\t\n\r "':]+\}\s*\}))?\))(?<!(?:\/\/|\*).*)/gu

export default DYNAMIC_IMPORT_REGEX
