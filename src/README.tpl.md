[//]: # (Do not edit README.md as it is automatically generated from src/README.tpl.md)

# <%= pkg.title %> v<%= pkg.version %>

[![Build status](https://img.shields.io/travis/andyexeter/<%= pkg.name %>.svg)](https://travis-ci.org/andyexeter/<%= pkg.name %>)
[![npm version](https://img.shields.io/npm/v/<%= pkg.name %>.svg)](https://www.npmjs.com/package/<%= pkg.name %>)
[![devDependency Status](https://img.shields.io/david/dev/andyexeter/<%= pkg.name %>.svg)](https://david-dm.org/andyexeter/<%= pkg.name %>#info=devDependencies)

<%= pkg.description %>

A JavaScript (and jQuery) plugin which returns the most visible element from a given set.

## Installation

#### Download
* [<%= files.min.name %>](https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.min.name %>) (<%= files.min.size %>, <%= files.min.gzipped %> gzipped)
* [<%= files.main.name %>](https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.main.name %>)  (<%= files.main.size %>, <%= files.main.gzipped %> gzipped)

#### CDN
```html
<script src="https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.min.name %>"></script>
<!-- OR -->
<script src="https://unpkg.com/<%= pkg.name %>@<%= pkg.version %>/dist/<%= files.main.name %>"></script>
```

#### Package Managers
Install via yarn:
```sh
$ yarn add <%= pkg.name %>
```

Install via NPM:
```sh
$ npm install <%= pkg.name %> --save
```

## Usage

#### jQuery

The plugin will automatically be added to any global (window) version of jQuery:

```js
$('.my-elements').mostVisible().addClass('most-visible');

// with options
$('.my-elements').mostVisible({ percentage: true, offset: 160 }).addClass('most-visible');
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
`percentage` (boolean) - Whether to calculate the visibility of an element as a percentage of its height. Defaults to `false`.
`offset` (number) - Specify an offset to use when calculating visibility. Useful for e.g fixed headers.

Modify the `mostVisible.defaults` object to change default option values:

```js
mostVisible.defaults.percentage = true;
mostVisible.defaults.offset = 160;
```

## License

The MIT License (MIT)
Copyright (c) <%= grunt.template.today("yyyy") %> [The <%= pkg.title %> authors](<%= pkg.repository.url %>/graphs/contributors)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
