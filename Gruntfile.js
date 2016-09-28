module.exports = function( grunt ) {
	'use strict';

	grunt.option( 'stack', true );
	grunt.util.linefeed = '\n';

	grunt.initConfig( {

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			src: {
				src: 'src/**/*.js'
			},
			dist: {
				src: 'dist/most-visible.js'
			},
			grunt: {
				options: {
					node: true
				},
				src: 'Gruntfile.js'
			}
		},

		jscs: {
			options: {
				config: '.jscsrc'
			},
			src: {
				src: 'src/**/*.js'
			},
			dist: {
				src: 'dist/most-visible.js'
			},
			grunt: {
				src: 'Gruntfile.js'
			}
		},

		qunit: {
			dist: {
				options: {
					page: {
						viewportSize: { height: 966 }
					}
				},
				src: 'test/index.html'
			}
		},

		copy: {
			dist: {
				src: 'src/most-visible.js',
				dest: 'dist/most-visible.js'
			}
		},

		uglify: {
			dist: {
				options: {
					report: 'gzip',
					preserveComments: /(?:^!|@(?:license|preserve|cc_on))/
				},
				src: 'dist/most-visible.js',
				dest: 'dist/most-visible.min.js'
			}
		},

		watch: {
			js: {
				files: [ '<%= jshint.src.src %>' ],
				tasks: [ 'default' ]
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-jscs' );
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'dist', [ 'copy:dist', 'uglify:dist' ] );
	grunt.registerTask( 'test', [ 'qunit' ] );
	grunt.registerTask( 'default', [ 'jshint', 'jscs', 'dist' ] );
};
