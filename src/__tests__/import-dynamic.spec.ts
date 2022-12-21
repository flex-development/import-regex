/**
 * @file Unit Tests - DYNAMIC_IMPORT_REGEX
 * @module import-regex/tests/dynamic/unit
 */

import { omit } from 'radash'
import { dedent } from 'ts-dedent'
import TEST_SUBJECT from '../import-dynamic'

describe('unit:DYNAMIC_IMPORT_REGEX', () => {
  beforeEach(() => {
    TEST_SUBJECT.lastIndex = 0
  })

  describe('comments', () => {
    it('should ignore import in multi-line comment', () => {
      // Arrange
      const code = dedent`
        /**
         * @example
         *  const { readPackage } = await import('read-pkg')
         */
      `

      // Act + Expect
      expect(TEST_SUBJECT.test(code)).to.be.false
    })

    it('should ignore import in single-line comment', () => {
      expect(TEST_SUBJECT.test('// await import("./init.mjs")')).to.be.false
    })
  })

  describe('conditional imports', () => {
    it('should match conditional import', () => {
      // Arrange
      const code = dedent`
        let mod

        if (typeof window === 'undefined') {
          mod = await import('module-used-on-server')
        }
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })
  })

  describe('dynamic specifiers', () => {
    it('should match import with template literal as specifier', () => {
      // Arrange
      const code = dedent`
        Array.from({ length: 10 }).map((_, index) => {
          return import(\`/modules/module-\${index}.js\`)
        })
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })

    it('should match import with variable as specifier', () => {
      // Arrange
      const code = 'const foo = "./utils.mjs"; await import(foo)'

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })
  })

  describe('import assertions', () => {
    it('should match import with import assertion', () => {
      // Arrange
      const code = dedent`
        await import('__tests__/report.json', {
          assert: { type: 'json' }
        })
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })
  })

  describe('named imports', () => {
    it('should match named import(s) in multi-line statement', () => {
      // Arrange
      const code = dedent`
        const {
          addFive,
          addFour,
          addThree,
          addTwo,
          squareFive,
          squareFour,
          squareThree,
          squareTwo
        } = await import('./lib')
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })

    it('should match named import(s) in single-line statement', () => {
      // Arrange
      const code = 'const { readPackage } = await import("read-pkg")'

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })

    it('should match named import(s) with renamed identifiers', () => {
      // Arrange
      const code = dedent`
        (async () => {
          if (somethingIsTrue) {
            const {
              default: myDefault,
              foo,
              bar,
            } = await import('/modules/my-module.js');
          }
        })();
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })

    it('should match named import(s) with renamed string literals', () => {
      // Arrange
      const code = dedent`
        const { "h-i": hi } = await import('./hi.js')
        const { 'j-k': jk } = await import("./jk.js")
      `

      // Act
      const result = [...code.matchAll(TEST_SUBJECT)]

      // Expect
      expect(result).to.not.be.empty
      expect(result.map(res => omit(res, ['input']))).toMatchSnapshot()
    })
  })

  describe('namespace imports', () => {
    it('should match namespace import', () => {
      // Arrange
      const code = 'const color = await import("colorette")'

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })
  })

  describe('side-effect imports', () => {
    it('should match side-effect import', () => {
      // Arrange
      const code = `await import('./modules/my-module.js')`

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })
  })

  describe('then/catch', () => {
    it('should match import without await', () => {
      // Arrange
      const code = dedent`
        const main = document.querySelector("main");

        for (const link of document.querySelectorAll("nav > a")) {
          link.addEventListener("click", (e) => {
            e.preventDefault();

            import("/modules/my-module.js")
              .then((module) => {
                module.loadPageInto(main);
              })
              .catch((err) => {
                main.textContent = err.message;
              });
          });
        }
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(omit(result!, ['input'])).toMatchSnapshot()
    })
  })
})
