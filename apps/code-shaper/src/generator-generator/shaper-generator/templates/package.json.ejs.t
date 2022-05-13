{
  "name": "<%= packageName %>",
  "description": "<%= generatorName %> generator",
  "version": "0.0.1",
  "author": "",
  "license": "",
  "publishConfig": {
    "access": "public"
  },
  "main": "./dist/index.js",
  "scripts": {
    "build": "rimraf dist && tsc && copyfiles --all --up 1 \"src/**/templates/**/*\" dist",
    "lint": "eslint src/**/*.ts*",
    "clean": "rimraf .turbo node_modules dist"
  },
  "dependencies": {
    "@code-shaper/shaper-utils": "^0.0.4",
    "inquirer": "^8.2.4",
    "yargs": "^17.4.1"
  },
  "devDependencies": {
    "@types/inquirer": "^8.2.1",
    "@types/node": "^17.0.31",
    "@types/yargs": "^17.0.10",
    "copyfiles": "^2.4.1",
    "eslint": "^8.15.0",
    "eslint-config-custom": "*",
    "tsconfig": "*",
    "typescript": "^4.6.4"
  }
}
