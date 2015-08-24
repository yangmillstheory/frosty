# frosty

[![Build Status](https://travis-ci.org/yangmillstheory/frosty.svg?branch=master)](https://travis-ci.org/yangmillstheory/mixin.a.lot)

## Introduction

Reusable building block that facilitates defining properties on objects that can be set to a defined value just once. 

Setting such properties again to a defined value (even if it's the same as the existing value) raises an error.

It abstracts away the boilerplate of building immutable data structures. 


## Install

Via [NPM](https://www.npmjs.com/package/frosty).

`npm install --save frosty`

## Usage

Creating an immutable type:

    import frosty from 'frosty'

    class ImmutableType {
      
      constructor(property1, property2) {
        this.property1 = property1
        this.property2 = property2
      }
    }
    
    frosty.freeze(ImmutableType.prototype, 'property1', 'property2')
    
`undefined` isn't a valid value for a frozen property:
    
    // throws 'property2' should be defined 
    let immutable_type = new ImmutableType('my_property1', undefined)
    

Frozen properties can only read, and set once:
    
    let immutable_type = new ImmutableType('my_property1', true)
    
    immutable_type.property1 // 'my_property1'
    immutable_type.property1 = 'another_property1' // throws 'my_property1' is immutable
 
## Development

In [ES6 & Babel](http://babeljs.io/).

Transpile:
 
    $ node_modules/.bin/gulp build
   
Test:

    $ sudo chmod +x test.js
    $ npm test
      
## LICENSE

MIT © 2015, Victor Alvarez