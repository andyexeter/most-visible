# CHANGELOG

All notable changes to this project will be documented in this file.

## v2.0 - 2021-12-22

Version 2 is a major version release with backwards incompatible changes to version 1:

* Dropped support for IE11
* Restructured the plugin away from UMD into two separate files; for the browser (dist/most-visible) and a module for bundlers (js/most-visible).
* Removed the ability to create an instance of the function with `new mostVisible()`
* Renamed the `makeJQueryPlugin` function to `makeJqueryPlugin`
