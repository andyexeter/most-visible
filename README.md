# Most Visible

[![License](https://img.shields.io/npm/l/most-visible)](https://github.com/andyexeter/most-visible/blob/master/LICENSE)
[![Build status](https://github.com/andyexeter/most-visible/actions/workflows/ci.yaml/badge.svg)](https://github.com/andyexeter/most-visible/actions/workflows/ci.yaml)
[![npm version](https://img.shields.io/npm/v/most-visible.svg)](https://www.npmjs.com/package/most-visible)
[![Size](https://img.shields.io/bundlephobia/min/most-visible@2.0.0)](https://unpkg.com/most-visible@2.0.0/dist/most-visible.min.js)
[![Size](https://img.shields.io/bundlephobia/minzip/most-visible@2.0.0)](https://unpkg.com/most-visible@2.0.0/dist/most-visible.min.js)

A zero dependency JavaScript module and jQuery plugin which returns the most visible element from a given set.

## Installation

#### Download
* [most-visible.min.js](https://unpkg.com/most-visible@2.0.0/dist/most-visible.min.js)
* [most-visible.ts](https://unpkg.com/most-visible@2.0.0/dist/most-visible.js)

#### CDN
```html
<script src="https://unpkg.com/most-visible@2.0.0/dist/most-visible.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/most-visible@2.0.0/dist/most-visible.ts"></script>
```

#### Package Managers

Install via [Bun](https://bun.sh/):
```sh
$ bun add most-visible
```

Install via yarn:
```sh
$ yarn add most-visible
```

Install via NPM:
```sh
$ npm install most-visible --save
```

## Usage

### Browser

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
const element = mostVisible('.my-elements');
```

Or a NodeList:
```js
const element = mostVisible(document.querySelectorAll('.my-elements'));
```

### Webpack etc.

```js
import mostVisible from 'most-visible';

const element = mostVisible('.my-elements');
```

To attach the jQuery plugin to a non-global version of jQuery you must call `.makeJqueryPlugin`:

```js
import $ from 'jquery';
import {mostVisible, makeJqueryPlugin} from 'most-visible';

makeJqueryPlugin($, mostVisible);

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
