/**
 * @file STATIC_IMPORT_REGEX
 * @module import-regex/static
 */

/**
 * Static `import` statement regex. Ignores matches in comments.
 *
 * @see https://regex101.com/r/wlYQUN
 *
 * @const {RegExp} STATIC_IMPORT_REGEX
 */
const STATIC_IMPORT_REGEX: RegExp =
  /(?<!(?:\/\/|\*).*)(?<=^|[\s;])import\s*(?<type>type(?=\s+))?(?:[\s"']*(?<imports>[\w\t\n\r "$'*,/{}-]+?)\s+from\s*)?["']\s*(?<specifier>(?:(?<='\s*)[^']*[^\s'](?=\s*'))|(?:(?<="\s*)[^"]*[^\s"](?=\s*")))\s*["'](?:\s+assert\s+(?<assertion>{[\w\t\n\r "':]+?}))?(?=[\s;]*)/g

export default STATIC_IMPORT_REGEX
