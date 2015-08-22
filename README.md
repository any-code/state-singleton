# state-singleton

[![Build Status](https://travis-ci.org/any-code/state-singleton.svg?branch=master)](https://travis-ci.org/any-code/state-singleton)

> application description 

## Getting Started

### 1. Installation

``` bash
npm install state-singleton
```

### 2. Examples

``` javascript
  state.set('prop', {a: 1})

  // triggered whenever the entity is changed
  state.on('prop', function(newValue, oldValue) {
    test.deepEqual(newValue, {a: 2}, 'new value was not expected');
    test.deepEqual(oldValue, {a: 1}, 'old value was not expected');
    test.done();
  })

  state.set('prop', {a: 2});
  
  state.get('prop') // returns {a: 2}
```

## Copyright and license
Copyright (c) 2015, Any Code <lee@anycode.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
