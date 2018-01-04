module.exports = function (grunt) {
    'use strict';

    grunt.option('stack', true);
    grunt.util.linefeed = '\n';

    var project = {
        pkg: grunt.file.readJSON('package.json'),

        files: {
            main: 'dist/most-visible.js',
            min: 'dist/most-visible.min.js',
            boilerplate: 'src/boilerplate.js'
        },

        paths: {}
    };

    require('load-grunt-config')(grunt, {
        data: project
    });
};
