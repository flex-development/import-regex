/**
 * @file Snapshot Serializers - RegExpArray
 * @module tests/setup/serializers/regex-array
 */

import type { RegExpArray } from '#tests/types'
import {
  get,
  isArray,
  isNumber,
  isString,
  omit,
  type Fn
} from '@flex-development/tutils'

expect.addSnapshotSerializer({
  /**
   * Prints the given `value`.
   *
   * @param {unknown} value - Value to print
   * @param {Fn<[unknown], string>} printer - Print function
   * @return {string} `value` as printable string
   */
  print(value: unknown, printer: Fn<[unknown], string>): string {
    return printer(omit(value, ['index', 'input']))
  },
  /**
   * Checks if the given `value` is a {@linkcode RegExpArray}.
   *
   * @param {unknown} value - Value to check
   * @return {value is RegExpArray} `true` if `value` is {@linkcode RegExpArray}
   */
  test(value: unknown): value is RegExpArray {
    return (
      isArray(value) &&
      isNumber(get(value, 'index')) &&
      isString(get(value, 'input'))
    )
  }
})
