/**
 * @file Type Tests - DYNAMIC_IMPORT_REGEX
 * @module import-regex/tests/unit-d/dynamic
 */

import type TEST_SUBJECT from '../import-dynamic'

describe('unit-d:DYNAMIC_IMPORT_REGEX', () => {
  it('should be instance of RegExp', () => {
    expectTypeOf<typeof TEST_SUBJECT>().toEqualTypeOf<RegExp>
  })
})
