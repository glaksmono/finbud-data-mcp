# Changelog

## 0.1.0-alpha.1 (2025-06-21)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/glaksmono/finbud-data-mcp/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([4d98210](https://github.com/glaksmono/finbud-data-mcp/commit/4d98210ed221a344d5d501b08b71dc19c5fc36e3))
* **client:** add withOptions helper ([bbd09e5](https://github.com/glaksmono/finbud-data-mcp/commit/bbd09e5c4616dc838df8531a7ed6813236150160))
* **mcp:** implement support for binary responses ([c26839a](https://github.com/glaksmono/finbud-data-mcp/commit/c26839a51536592635de12c34f7ec2be7fc10fd3))
* **mcp:** include http information in tools ([5d981b3](https://github.com/glaksmono/finbud-data-mcp/commit/5d981b3a0e5e9f21e3fbb11f32bd75f4f0646207))
* **mcp:** set X-Stainless-MCP header ([9cd4505](https://github.com/glaksmono/finbud-data-mcp/commit/9cd450506ca909245bbb6740c90954d725209bb6))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([0356c7a](https://github.com/glaksmono/finbud-data-mcp/commit/0356c7a838fba708cc67ffdb9902d1fcf11f2beb))
* more gracefully handle $refs and work around schema limitations ([31c9070](https://github.com/glaksmono/finbud-data-mcp/commit/31c90707022ee8944f3a80172cd0d930069dd67d))
* more gracefully handle $refs and work around schema limitations ([efef920](https://github.com/glaksmono/finbud-data-mcp/commit/efef920adcf7170430cacb8b47924134c4529c06))


### Bug Fixes

* **client:** always overwrite when merging headers ([63b1c16](https://github.com/glaksmono/finbud-data-mcp/commit/63b1c16982d856671996002a246175d6bca4ee59))
* **client:** explicitly copy fetch in withOptions ([fdb04c0](https://github.com/glaksmono/finbud-data-mcp/commit/fdb04c02e5d27d359d82905b9959fc2f59fa7170))
* compat with more runtimes ([4d5c62c](https://github.com/glaksmono/finbud-data-mcp/commit/4d5c62c29eb115be0bd66c5c0f10fef26c0d314f))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([8be7422](https://github.com/glaksmono/finbud-data-mcp/commit/8be74225f185e650bb915d57118158ae40e77882))
* **mcp:** fix cursor schema transformation issue with recursive references ([6752b26](https://github.com/glaksmono/finbud-data-mcp/commit/6752b267d3ac16aacc3f88f6488e269e4d586b4f))
* **mcp:** include description in dynamic tool search ([05ed71f](https://github.com/glaksmono/finbud-data-mcp/commit/05ed71f4ee70de4ae373ef2cc7a406152e1edafc))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([7736906](https://github.com/glaksmono/finbud-data-mcp/commit/773690661e8b5def5f3e2c2e6ac5b0eb5ae3b7ce))
* publish script — handle NPM errors correctly ([63bf6e2](https://github.com/glaksmono/finbud-data-mcp/commit/63bf6e2ed7a137865ab9a6ce9f1b76697819eb8a))


### Chores

* adjust eslint.config.mjs ignore pattern ([bf4abee](https://github.com/glaksmono/finbud-data-mcp/commit/bf4abee7e44dc51348952fcd024f537f823efc7d))
* avoid type error in certain environments ([8a2cf73](https://github.com/glaksmono/finbud-data-mcp/commit/8a2cf7351a842076a1f2f3d39f9d64e59f2c489d))
* **build:** automatically build subpackages if present ([d24308d](https://github.com/glaksmono/finbud-data-mcp/commit/d24308d9ce86f5564ad2256f6a41a46616a63274))
* **ci:** enable for pull requests ([6f6cbe1](https://github.com/glaksmono/finbud-data-mcp/commit/6f6cbe18a4d07ddbb96ca4ccb0bd512abaf74268))
* **client:** drop support for EOL node versions ([efbb366](https://github.com/glaksmono/finbud-data-mcp/commit/efbb366433bc925e10dce957022396d8246fc1a4))
* **client:** refactor imports ([295e5b4](https://github.com/glaksmono/finbud-data-mcp/commit/295e5b4d891347ceb10f8a79d52fb22505ac84d7))
* **deps:** bump eslint-plugin-prettier ([4695993](https://github.com/glaksmono/finbud-data-mcp/commit/4695993a6ac868ba7c6c295ad052949567de7fb6))
* **docs:** grammar improvements ([c52ffd1](https://github.com/glaksmono/finbud-data-mcp/commit/c52ffd1a3a14b2bfae679a7d2013af155e0fc1ed))
* **docs:** use top-level-await in example snippets ([05e6952](https://github.com/glaksmono/finbud-data-mcp/commit/05e6952b137e9c9bc9451728ca8f4887c78ae78b))
* improve publish-npm script --latest tag logic ([a0cd176](https://github.com/glaksmono/finbud-data-mcp/commit/a0cd1765ae773a8c7ecf678a1bd5d0f3a359a52e))
* **internal:** add pure annotations, make base APIResource abstract ([717190c](https://github.com/glaksmono/finbud-data-mcp/commit/717190ce0ea1519e271e6227cb9366b2f0b17b26))
* **internal:** codegen related update ([20649d8](https://github.com/glaksmono/finbud-data-mcp/commit/20649d803cbb55498c0ae5ad94d24ff52485de50))
* **internal:** codegen related update ([e98bd42](https://github.com/glaksmono/finbud-data-mcp/commit/e98bd426970728eb1bf9b776f42a10ee88146469))
* **internal:** codegen related update ([a96cb51](https://github.com/glaksmono/finbud-data-mcp/commit/a96cb51d407b318527fe7b23f022d3accebcaa5a))
* **internal:** codegen related update ([773fd6e](https://github.com/glaksmono/finbud-data-mcp/commit/773fd6e89d68a2628c1667fc492ff69658cc990b))
* **internal:** fix readablestream types in node 20 ([40c6516](https://github.com/glaksmono/finbud-data-mcp/commit/40c6516c4a64aa51e312ee6acd24817b1014dc4c))
* **internal:** refactor utils ([ffc5fb8](https://github.com/glaksmono/finbud-data-mcp/commit/ffc5fb8dfafc99ebbb28f33e7394c7b02f5388d4))
* **internal:** refactor utils ([be40aee](https://github.com/glaksmono/finbud-data-mcp/commit/be40aeef4d4c791eb2441c67b4ff091c33b525d0))
* **internal:** share typescript helpers ([2ca3caf](https://github.com/glaksmono/finbud-data-mcp/commit/2ca3caf1ea309c7697d959f7be49109768f2b899))
* **internal:** share typescript helpers ([0032b3c](https://github.com/glaksmono/finbud-data-mcp/commit/0032b3c62c498df69e6e85c43413cd06463ffff5))
* **internal:** update jest config ([d056988](https://github.com/glaksmono/finbud-data-mcp/commit/d0569885a1834860603f0f0500885eef47d80068))
* **mcp:** provides high-level initMcpServer function and exports known clients ([72a94ab](https://github.com/glaksmono/finbud-data-mcp/commit/72a94abf4f663e04d3ad5efcc0795c360729e9bd))
* **mcp:** remove duplicate assignment ([853dbfc](https://github.com/glaksmono/finbud-data-mcp/commit/853dbfcf8cc1e8b56ce843ac75d054876230ec01))
* **package:** remove engines ([fc90941](https://github.com/glaksmono/finbud-data-mcp/commit/fc90941271215c9e37c4a674c992020969438e47))
* **readme:** update badges ([e307241](https://github.com/glaksmono/finbud-data-mcp/commit/e307241c66b11308c6827467ea65127c121852c6))
* **readme:** use better example snippet for undocumented params ([121276d](https://github.com/glaksmono/finbud-data-mcp/commit/121276d595c2a1c01dadc23e402a1b119d122fe6))
* **tests:** use node 22 for CI tests ([a1461d6](https://github.com/glaksmono/finbud-data-mcp/commit/a1461d66471d67c4599507265b66d22ff279d9b1))


### Documentation

* **readme:** fix typo ([d65a7bb](https://github.com/glaksmono/finbud-data-mcp/commit/d65a7bb94b030e1e0440749666fe3f0ed49f2223))
* **readme:** fix typo ([93fc988](https://github.com/glaksmono/finbud-data-mcp/commit/93fc988d4537d517d66b2c55ec4062198bc0366a))

## 0.0.1-alpha.1 (2025-04-25)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/glaksmono/finbud-data-mcp/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* configure new SDK language ([13ec14a](https://github.com/glaksmono/finbud-data-mcp/commit/13ec14a7e475625efd602432400398cf9f1634ea))
* go live ([db90c58](https://github.com/glaksmono/finbud-data-mcp/commit/db90c58be800e9967ece1d0f0af193294e73c400))
* update SDK settings ([0f6010c](https://github.com/glaksmono/finbud-data-mcp/commit/0f6010c2f2630f645eddfa9443eea72531b14023))
