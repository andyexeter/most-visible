[//]: # (Do not edit README.md as it is automatically generated from src/README.tpl.md)

# Most Visible v1.5.0

.. image::    :alt: NPM
[![License](https://img.shields.io/npm/l/most-visible)](https://github.com/andyexeter/most-visible/blob/master/LICENSE)
[![Build status](https://img.shields.io/github/workflow/status/andyexeter/most-visible/test)](https://travis-ci.org/andyexeter/most-visible)
[![npm version](https://img.shields.io/npm/v/most-visible.svg)](https://www.npmjs.com/package/most-visible)
[![devDependency Status](https://img.shields.io/david/dev/andyexeter/most-visible.svg)](https://david-dm.org/andyexeter/most-visible#info=devDependencies)

A JavaScript module and jQuery plugin which returns the most visible element from a given set.

## Installation

#### Download
* [most-visible.min.js](https://unpkg.com/most-visible@1.5.0/dist/most-visible.min.js) (1.3kB, 678B gzipped)
* [most-visible.js](https://unpkg.com/most-visible@1.5.0/dist/most-visible.js)  (4.08kB, 1.43kB gzipped)

#### CDN
```html
<script src="https://unpkg.com/most-visible@1.5.0/dist/most-visible.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/most-visible@1.5.0/dist/most-visible.js"></script>
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

The plugin will automatically be added to any global (window) version of jQuery:

```js
$('.my-elements').mostVisible().addClass('most-visible');

// with options
$('.my-elements').mostVisible({percentage: true, offset: 160}).addClass('most-visible');
```

#### Vanilla JavaScript

You can pass in either a selector string:
```js
var element = mostVisible('.elements');
```

Or a NodeList:
```js
var element = mostVisible(document.querySelectorAll('.elements'), {
    percentage: true
});
```

Or you can create a new instance:
```js
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

$('.my-elements').removeClass('active').mostVisible().addClass('active');
```

## Options
| Option         | Type               | Description                                                                                  | Default           |
|----------------|--------------------|----------------------------------------------------------------------------------------------|-------------------|
| percentage     | `boolean`          | Whether to calculate the visibility of an element as a percentage of its height              | `false`           |                                                                     | `''`              |
| offset         | `number`           | A pixel offset to use when calculating visibility. Useful for e.g fixed headers.             | `0`               |

Modify the `mostVisible.defaults` object to change default option values:

```js
mostVisible.defaults.percentage = true;
mostVisible.defaults.offset = 160;
```

## License

Released under the [MIT license](LICENSE)
