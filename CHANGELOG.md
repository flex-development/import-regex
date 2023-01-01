## [2.0.1](https://github.com/flex-development/import-regex/compare/2.0.0...2.0.1) (2023-01-01)


### :package: Build

* **yarn:** bump yarn from 4.0.0-rc.14 to 4.0.0-rc.34 ([88dfd2a](https://github.com/flex-development/import-regex/commit/88dfd2af331a722cd51cf5210b39bbadf50f9e25))


### :robot: Continuous Integration

* [[@dependabot](https://github.com/dependabot)] fix npm package-ecosystem x yarn integration ([76ea054](https://github.com/flex-development/import-regex/commit/76ea0544a9dd8e4d39341ef3c056cc423f176a88))
* **workflows:** [`add-to-project`] add items from repo admin account ([92d9465](https://github.com/flex-development/import-regex/commit/92d9465f538010ce2fecc98bcfaaacbed2c5c576))
* **workflows:** [`ci`] upload coverage report to codecov ([1fff40f](https://github.com/flex-development/import-regex/commit/1fff40f22a86f353cc6231822341fda9cbf782b0))
* **workflows:** [`publish`] cleanup registry scope ([ef72f42](https://github.com/flex-development/import-regex/commit/ef72f4214b954c3afb14e2893c3c295b625d108f))
* **workflows:** [`publish`] use node version file ([c9f342f](https://github.com/flex-development/import-regex/commit/c9f342f1ded421ee1140fb446015d05369abe35c))


### :pencil: Documentation

* add "contributor covenant code of conduct" ([6ff3277](https://github.com/flex-development/import-regex/commit/6ff3277a0ca2ce0252f02724f1acf6befe8e5fb1))


### :bug: Fixes

* **install:** [git] make `postinstall` script work with git install ([e54b74b](https://github.com/flex-development/import-regex/commit/e54b74b0b43184c86f4c15107c554bfd069cc00c))
* **regex:** [static] only match top-level statements ([8a7c94f](https://github.com/flex-development/import-regex/commit/8a7c94f7ffd00028400387fa8a27e0e5978f14cc))


### :house_with_garden: Housekeeping

* update project architecture ([fc71794](https://github.com/flex-development/import-regex/commit/fc717949d4db8e0db0dee7472c5e600e01898881))
* **github:** add commit scope `install` ([db9e391](https://github.com/flex-development/import-regex/commit/db9e391bd37bd70cf88463f7c6fdc657b1dae891))
* **github:** add label `scope:install` ([e918348](https://github.com/flex-development/import-regex/commit/e918348423bd0d97522d20be1ddaed374f165e31))
* **github:** add label `status:triaged` ([6415d4b](https://github.com/flex-development/import-regex/commit/6415d4bc311f68fddf9dc7a59c52e23126270eb4))
* **tests:** codecov integration ([ca8c77b](https://github.com/flex-development/import-regex/commit/ca8c77b90e2b0124942faa88ae25a52145eaef4d))
* **vscode:** update settings ([c3bda83](https://github.com/flex-development/import-regex/commit/c3bda8342bc6aa6da5734a06f1dc3b9c9e0ebb15))

## [2.0.0](https://github.com/flex-development/import-regex/compare/1.0.1...2.0.0) (2022-12-20)


### ⚠ BREAKING CHANGES

* **regex:** [dynamic] capture options bag

### :package: Build

* **deps-dev:** bump deps according to `yarn upgrade-interactive` ([77a18b4](https://github.com/flex-development/import-regex/commit/77a18b48fabea61db9cf85268ab01f57cbd2d59f))


### :robot: Continuous Integration

* **deps:** Bump actions/checkout from 3.1.0 to 3.2.0 ([#4](https://github.com/flex-development/import-regex/issues/4)) ([98d9e99](https://github.com/flex-development/import-regex/commit/98d9e9998cb67c5b427c07a2686d1324ae743df1))
* **deps:** Bump dessant/lock-threads from 3.0.0 to 4.0.0 ([#3](https://github.com/flex-development/import-regex/issues/3)) ([c744a7a](https://github.com/flex-development/import-regex/commit/c744a7a7bc0d7593a1e04379b4681f4f30b3dc2b))
* **workflows:** [`ci`] fix `yarn` step ([b74d6dd](https://github.com/flex-development/import-regex/commit/b74d6dd721479d67d854c1a3519a60c5d817c78b))


### :pencil: Documentation

* reformat api docs ([1ab4590](https://github.com/flex-development/import-regex/commit/1ab45902df4d031aae3a0a4dfc9c703ceb022cab))
* update usage example ([e509922](https://github.com/flex-development/import-regex/commit/e50992229070d8fb9e65ec8e4c7e371e5de9ba40))
* **regex:** add `DYNAMIC_IMPORT_REGEX` example ([7c1cda6](https://github.com/flex-development/import-regex/commit/7c1cda667f1178dc33681f862ed2ec51729a4b7f))
* **regex:** add `STATIC_IMPORT_REGEX` example ([6a8fad0](https://github.com/flex-development/import-regex/commit/6a8fad07d81862bed99a56b21b3a640192e92231))


### :house_with_garden: Housekeeping

* cleanup project architecture ([d738a26](https://github.com/flex-development/import-regex/commit/d738a26fc13deba2ba9d0d1d526f4fd896908ee3))
* configure type testing ([757d22c](https://github.com/flex-development/import-regex/commit/757d22cfefe78f5f047fe490f0d8d4edd0050f2e))


### :zap: Refactors

* **regex:** [dynamic] capture options bag ([ccfea7c](https://github.com/flex-development/import-regex/commit/ccfea7ca944c24b70c48c822fc6e40900f2648ab))
* **ts:** enforce `exactOptionalPropertyTypes` ([ce601f6](https://github.com/flex-development/import-regex/commit/ce601f61cf1241e3b8e21e53a4436dc7105484a8))

## [1.0.1](https://github.com/flex-development/import-regex/compare/1.0.0...1.0.1) (2022-11-25)


### :pencil: Documentation

* add usage docs ([e0ca4e9](https://github.com/flex-development/import-regex/commit/e0ca4e95ad60f3e03e114bad0e3cca5b9a865ec0))

## 1.0.0


### :robot: Continuous Integration

* **workflows:** add node.js matrix to `ci` workflow ([0f80b75](https://github.com/flex-development/import-regex/commit/0f80b75554b50900c78807f979211ac8c92e5ffe))
* **workflows:** archive code coverage and production artifacts ([415aea1](https://github.com/flex-development/import-regex/commit/415aea12b81fc7c960ae59e21681ee643117b144))
* **workflows:** use environment files ([e5e9385](https://github.com/flex-development/import-regex/commit/e5e9385fefcca18acd086836ebeef7fe54b48949))


### :sparkles: Features

* **regex:** `DYNAMIC_IMPORT_REGEX` ([341738e](https://github.com/flex-development/import-regex/commit/341738ecda9c3335274300c1fc82458deaa54c16))
* **regex:** `STATIC_IMPORT_REGEX` ([6304e59](https://github.com/flex-development/import-regex/commit/6304e599251317b181effc3003a31fb2151bbec7))


### :house_with_garden: Housekeeping

* **pkg:** add script `test:cov:serve` ([484d837](https://github.com/flex-development/import-regex/commit/484d8373de88a13120b623d408a942262800d05c))
