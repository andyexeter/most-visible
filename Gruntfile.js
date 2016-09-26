module.exports = function( grunt ) {
	'use strict';

	grunt.option( 'stack', true );
	grunt.util.linefeed = '\n';

	grunt.initConfig( {

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			dist: {
				src: 'src/most-visible.js'
			},
			grunt: {
				options: {
					node: true
				},
				src: 'Gruntfile.js'
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
					preserveComments: 'some'
				},
				src: 'dist/most-visible.js',
				dest: 'dist/most-visible.min.js'
			}
		},

		watch: {
			js: {
				files: [ '<%= jshint.dist.src %>' ],
				tasks: [ 'default' ]
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'default', [ 'jshint:dist', 'copy:dist', 'uglify:dist' ] );
};
