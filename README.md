Run it with
```
PERCY_TOKEN="XYZ" yarn check-build Org/test 15479087
```

Command above is failing
```
[]$ PERCY_TOKEN="XYZ" yarn check-build Org/test 15479087
yarn run v1.22.18
$ ts-node wait_for_build.ts Org/test 15479087
Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: <projectRoot>/node_modules/@percy/client/dist/index.js
require() of ES modules is not supported.
require() of <projectRoot>/node_modules/@percy/client/dist/index.js from <projectRoot>/wait_for_build.ts is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from <projectRoot>/node_modules/@percy/client/package.json.

    at new NodeError (internal/errors.js:322:7)
    at Module._extensions..js (internal/modules/cjs/loader.js:1102:13)
    at Object.require.extensions.<computed> [as .js] (<projectRoot>/node_modules/ts-node/src/index.ts:1608:43)
    at Module.load (internal/modules/cjs/loader.js:950:32)
    at Function.Module._load (internal/modules/cjs/loader.js:790:12)
    at Module.require (internal/modules/cjs/loader.js:974:19)
    at require (internal/modules/cjs/helpers.js:101:18)
    at Object.<anonymous> (<projectRoot>/wait_for_build.ts:1:1)
    at Module._compile (internal/modules/cjs/loader.js:1085:14)
    at Module.m._compile (<projectRoot>/node_modules/ts-node/src/index.ts:1618:23) {
  code: 'ERR_REQUIRE_ESM'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

[]$ node --version
v14.19.3
```