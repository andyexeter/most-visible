# Contributing

## Reporting an issue
If you've spotted a bug or would like to see something added but aren't comfortable writing your own code then 
by all means create an issue and ask. Please do check that your request hasn't been asked before by searching for open and closed
issues beforehand.

## Creating a pull request
Pull requests are very welcome. Please use the standard 'fork and pull' github model:

1. Fork the repository and and clone locally.
2. Run `npm install` to download dev dependencies.
3. Create a new branch for your changes. Commit your changes.
4. Open a pull request

All pull requests must pass travis CI builds so please ensure your code follows
the standards within `.jshintrc`, `.jscsrc` and passes QUnit tests (You can use `grunt test` to test your code)

Any new features should also include an accompanying unit test located within `test\unit\my-feature.js`
