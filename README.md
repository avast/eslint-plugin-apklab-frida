# eslint-plugin-apklab-frida

ESLint plugin and [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Frida scripts in apklab.io Mobile Threat Intelligence Platform.

`eslint-plugin-apklab-frida` is based on the `eslint:recommend` and [eslint-config-google configuration](https://github.com/google/eslint-config-google).


## Installation

```
$ npm install --save-dev eslint eslint-plugin-apklab-frida
```


## Usage

Once the `eslint-plugin-apklab-frida` package is installed, you can use it by specifying `plugin:apklab-frida/recommended` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "plugin:apklab-frida/recommended",
  "rules": {
    // Additional, per-project rules...
  }
}
```
