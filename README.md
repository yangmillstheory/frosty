# frosty

[![Build Status](https://travis-ci.org/yangmillstheory/frosty.svg?branch=master)](https://travis-ci.org/yangmillstheory/mixin.a.lot)

[![Browser Support](https://ci.testling.com/yangmillstheory/frosty.png)
](https://ci.testling.com/yangmillstheory/frosty)

## Introduction

Define ***frozen*** properties on objects:

  - a frozen property can be set to an non-`undefined` value just once
  - any further attempts to change its value will throw an `Error`


## Install

Via [NPM](https://www.npmjs.com/package/frosty).

`npm install --save frosty`

## Usage

Canonical example of an immutable type:

    import frosty from 'frosty'

    class ImmutableType {
      constructor(property1, property2) {
        this.property1 = property1
        this.property2 = property2
      }
    }

    frosty.freeze(ImmutableType.prototype, 'property1', 'property2')

`undefined` isn't a valid value for a frozen property:

    // throws "'property2' should be defined"
    let immutable_type = new ImmutableType('my_property1', undefined)


Frozen properties are read-only, and can only be set once:

    let immutable_type = new ImmutableType('my_property1', true)

    immutable_type.property1 // 'my_property1'
    immutable_type.property1 = 'another_property1' // "throws 'my_property1' is immutable"
    

See the [tests](https://github.com/yangmillstheory/frosty/blob/master/src/frosty.spec.js) for more examples.

## Development

In [ES6 & Babel](http://babeljs.io/).

Transpile:

    $ node_modules/.bin/gulp build

Test:

    $ sudo chmod +x test.js
    $ npm test

## LICENSE

MIT © 2015, Victor Alvarez
