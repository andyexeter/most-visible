[//]: # (Do not edit README.md as it is automatically generated from src/README.tpl.md)

# Most Visible v1.0.1

[![Build status](https://img.shields.io/travis/andyexeter/most-visible.svg)](https://travis-ci.org/andyexeter/most-visible)
[![npm version](https://img.shields.io/npm/v/most-visible.svg)](https://www.npmjs.com/package/most-visible)
![Bower version](https://img.shields.io/bower/v/most-visible.svg)
[![devDependency Status](https://img.shields.io/david/dev/andyexeter/most-visible.svg)](https://david-dm.org/andyexeter/most-visible#info=devDependencies)

Returns the most visible element from a set of elements.

A JavaScript (and jQuery) plugin which returns the most visible element from a given set.

## Installation

#### Download
* [most-visible.min.js](https://unpkg.com/most-visible@1.0.1/dist/most-visible.min.js) (1.11kB, 571B gzipped)
* [most-visible.js](https://unpkg.com/most-visible@1.0.1/dist/most-visible.js)  (4.44kB, 1.36kB gzipped)

#### CDN
```html
<script src="https://unpkg.com/most-visible@1.0.1/dist/most-visible.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/most-visible@1.0.1/dist/most-visible.js"></script>
```

#### Package Managers
Install via yarn:
```sh
$ yarn add most-visible
```

Install via NPM:
```sh
$ npm install most-visible --save
```

## Usage

#### jQuery

```js
$('.my-elements').mostVisible().addClass('most-visible');

// with options
$('.my-elements').mostVisible({ percentage: true }).addClass('most-visible');
```

#### Vanilla JavaScript

```js
// You can pass in either a selector string or NodeList as the first argument
var element = mostVisible('.elements');

element = mostVisible(document.querySelectorAll('.elements'), {
    percentage: true
});

// as an instance
var instance = new mostVisible('.elements');
instance.getMostVisible();
```

#### Webpack and Browserify

```js
var mostVisible = require('most-visible');
mostVisible('.elements');
```

To attach the jQuery plugin to a non-global version of jQuery you must call `.makeJQueryPlugin`: 
```js
var $ = require('jquery');
var mostVisible = require('most-visible');

mostVisible.makeJQueryPlugin($);

$('.my-elements').mostVisible();
```

## Options
`percentage` - Whether to calculate the visibility of an element as a percentage of its height. Defaults to `false`.

Modify the `mostVisible.defaults` object to change default option values:

```js
mostVisible.defaults.percentage = true;
```

## License

The MIT License (MIT)
Copyright (c) 2018 [The Most Visible authors](https://github.com/andyexeter/most-visible/graphs/contributors)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
