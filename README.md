# Most Visible

A JavaScript (and jQuery) plugin which returns the most visible element from a given set.

## Installation

#### Download
* [most-visible.min.js](https://unpkg.com/most-visible@1.0.0/dist/most-visible.min.js)
* [most-visible.js](https://unpkg.com/most-visible@1.0.0/dist/most-visible.js)

#### CDN
```html
<script src="https://unpkg.com/most-visible@1.0.0/dist/most-visible.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/most-visible@1.0.0/dist/most-visible.js"></script>
```

#### Package Managers

Install via NPM:
```sh
$ npm install most-visible --save
```

Install via Bower:
```sh
$ bower install most-visible --save
```

## Usage

#### jQuery

```js
$( '.my-elements' ).mostVisible().addClass( 'most-visible' );

// with options
$( '.my-elements' ).mostVisible( { percentage: true } ).addClass( 'most-visible' );
```

#### Vanilla JavaScript

```js
var element = mostVisible( elements );
// with options
element = mostVisible( elements, options );
// as an instance
var instance = new MostVisible(elements, options);
instance.getMostVisible();
```

#### Browserify
```sh
$ npm install most-visible --save
```

```js
var mostVisible = require( 'most-visible' );
mostVisible( elements, options );
```

To attach the jQuery plugin to a non-global version of jQuery you must call `.makeJQueryPlugin`: 
```js
var $ = require( 'jquery' );
var mostVisible = require( 'most-visible' );

mostVisible.makeJQueryPlugin( $ );

$( '.my-elements' ).mostVisible();
```

## Options
`percentage` - Whether to calculate the visibility of an element as a percentage of its height. Defaults to `false`.

## Licence

[MIT](https://opensource.org/licenses/MIT)
