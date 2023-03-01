/**
 * @file Unit Tests - STATIC_IMPORT_REGEX
 * @module import-regex/tests/unit/static
 */

import { omit } from 'radash'
import { dedent } from 'ts-dedent'
import TEST_SUBJECT from '../import-static'

describe('unit:STATIC_IMPORT_REGEX', () => {
  beforeEach(() => {
    TEST_SUBJECT.lastIndex = 0
  })

  it('should ignore match in multi-line comment', () => {
    // Arrange
    const code = dedent`
      /**
       * @example
       *  import write from './utils/write'
       *	await write(result, fs)
       */
    `

    // Act + Expect
    expect(TEST_SUBJECT.test(code)).to.be.false
  })

  it('should ignore match in single-line comment', () => {
    expect(TEST_SUBJECT.test("// import fse from 'fs-extra'")).to.be.false
  })

  it('should ignore match in string literal', () => {
    // Arrange
    const code = dedent`
      const ERR_UNSUPPORTED_DIR_IMPORT: NodeErrorConstructor<
        ErrorConstructor,
        [string, string]
      > = createNodeError(
        ErrorCode.ERR_UNSUPPORTED_DIR_IMPORT,
        Error,
        "Directory import '%s' is not supported resolving ES modules imported from %s"
      )

      const text: string = await resolveModules(output.text, {
        conditions: [format === 'esm' ? 'import' : 'require'],
        ext: ext as Ext,
        extensions,
        parent
      })
    `

    // Act + Expect
    expect(TEST_SUBJECT.test(code)).to.be.false
  })

  describe('default imports', () => {
    it('should match default import', () => {
      // Act
      const result = TEST_SUBJECT.exec(`import pb from 'pretty-bytes'`)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match default import with import assertion', () => {
      // Arrange
      const code = `import pkg from './package.json' assert { type: 'json' }`

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match default import with named imports', () => {
      // Act
      const result = TEST_SUBJECT.exec('import foo, { bar } from "module-name"')

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match default import with namespace imports', () => {
      // Arrange
      const code = 'import foo, * as bar from "module-name"'

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match default type import', () => {
      // Act
      const result = TEST_SUBJECT.exec(`import type Foo from 'module-name'`)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })
  })

  describe('named imports', () => {
    it('should match named import(s) in multi-line statement', () => {
      // Arrange
      const code = dedent`
        import {
          addFive,
          addFour,
          addThree,
          addTwo,
          squareFive,
          squareFour,
          squareThree,
          squareTwo
        } from './lib'
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match named import(s) in single-line statement', () => {
      // Arrange
      const code = 'import { readPackage, type PackageJson } from "read-pkg"'

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match named import(s) with renamed identifiers', () => {
      // Arrange
      const code = `import { foo as bar } from 'module-name'`

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match named import(s) with renamed string literals', () => {
      // Arrange
      const code = dedent`
        import { "h-i" as hi } from './hi.js'
        import { 'j-k' as jk } from "./jk.js"
      `

      // Act
      const result = [...code.matchAll(TEST_SUBJECT)]

      // Expect
      expect(result).to.not.be.empty
      expect(result.map(res => omit(res, ['index', 'input']))).toMatchSnapshot()
    })

    it('should match named type import(s) in multi-line statement', () => {
      // Arrange
      const code = dedent`
        import type {
          BuildOptions,
          BuildResult,
          OutputFile,
          Plugin,
          PluginBuild
        } from 'esbuild'
      `

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })

    it('should match named type import(s) in single-line statement', () => {
      // Arrange
      const code = `import type { Nullable } from '@flex-development/tutils'`

      // Act
      const result = TEST_SUBJECT.exec(code)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })
  })

  describe('namespace imports', () => {
    it('should match namespace import', () => {
      // Act
      const result = TEST_SUBJECT.exec(`import * as color from 'colorette'`)

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })
  })

  describe('nested imports', () => {
    it('should match nested import statement(s) in declaration file', () => {
      // Arrange
      const code = dedent`
        declare module 'loader' {
          import type { Format } from '@flex-development/mlly'
          import type { Nullable, TypedArray } from '@flex-development/tutils'
          import type {
            BuildOptions,
            BuildResult,
            OutputFile,
            Plugin,
            PluginBuild
          } from 'esbuild'
        }
      `

      // Act
      const result = [...code.matchAll(TEST_SUBJECT)]

      // Expect
      expect(result).to.not.be.empty
      expect(result.map(res => omit(res, ['index', 'input']))).toMatchSnapshot()
    })
  })

  describe('side-effect imports', () => {
    it('should match side-effect import', () => {
      // Act
      const result = TEST_SUBJECT.exec('import "./polyfill.mjs"')

      // Expect
      expect(result).to.not.be.null
      expect(result).toMatchSnapshot()
    })
  })
})
