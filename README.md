# Regex

Regex is a [regular expression][1] extended functionality library to provide centralized and improved functions over [RegExp][2] object.

## Installation

To install the library you need to run `npm i regex` or with yarn `yarn install regex` from the CLI.

## Initialize the class

In order to instanciate the class you can do it easily passing the regular expression as a string or as a RegExp object to the class constructor.

```js
import Regex from "regex"

const regex = new Regex("Hello world")
```

## String methods

These methods intend to override default String.prototype methods.

### `Regex.Match`

This method provides string matching with an improved functionality returning the regular expression matches as an array of strings or null.

```js
const regex = new Regex(/Hello.*/)

console.log(regex.match("Hello world"))
// ["Hello world"]
```

### `Regex.MatchAll`

This method does the same as [String.prototype.match()][3] but returning an array of string arrays on regular expressions with `g` flag.

```js
const regex = new Regex(/o/g)

console.log(regex.matchAll("Hello world"))
// [["o"], ["o"]]
```

## RegExp methods

These methods intend to override default RegExp.prototype methods.

### `Regex.test`

This method test the regular expression against the given string parameter as [RegExp.prototype.test()][4] would do.

```js
const regex = new Regex(/Hello (.*)/)

console.log(regex.test("Hello world"))
// true
```

## Custom functions

These methods intend to extend regular expression handling by adding custom functionality.

### `Regex.groups`

This method returns an array of strings with regular expression groups.

```js
const regex = new Regex(/(Hello (.*))/)
const groups = regex.groups()

console.log(groups)
// groups[0] = "(Hello (.*))/"
// groups[1] = "(.*)"
```

## Properties

### `Regex.regex: RegExp`

This property contains the regular expression passed in the instance constructor as a RegExp objet.

### `Regex.isValid: boolean`

This property displays the regular expression instantiation acceptance.

### `Regex.isGlobal: boolean`

This property displays whether the regular expression has a `g` flag.

## Contribute

As my regular expression knowledge is very limited I ask you for any help you can provide. You are more than welcome to fork this repository or to pull any issues you might observe. In case you wanna contribute in any other way you can reach me by email to maramal@outlook.com.

## Third party libraries

This package has been build using [TSDX][5].

## License

This library has MIT license.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[3]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
[5]: https://tsdx.io/