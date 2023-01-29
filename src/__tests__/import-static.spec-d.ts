/**
 * @file Type Tests - STATIC_IMPORT_REGEX
 * @module import-regex/tests/unit-d/static
 */

import type TEST_SUBJECT from '../import-static'

describe('unit-d:STATIC_IMPORT_REGEX', () => {
  it('should be instance of RegExp', () => {
    expectTypeOf<typeof TEST_SUBJECT>().toEqualTypeOf<RegExp>
  })
})
