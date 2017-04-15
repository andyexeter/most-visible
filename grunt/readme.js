module.exports = function( grunt ) {
	'use strict';

	grunt.registerTask( 'readme', function() {
		var data = {
			pkg: getProcessedJSON( 'package.json' ),
			bwr: getProcessedJSON( 'bower.json' ),
			files: {
				main: getFile( '<%= files.main %>' ),
				min: getFile( '<%= files.min %>' )
			}
		};

		grunt.file.write( 'README.md', grunt.template.process( grunt.file.read( 'src/README.tpl.md' ), { data: data } ) );
	} );

	function getProcessedJSON( filepath, data ) {
		return JSON.parse( grunt.template.process( grunt.file.read( filepath ), data ) );
	}

	var path = require( 'path' );
	var zlib = require( 'zlib' );

	function getFile( filepath ) {
		filepath = grunt.template.process( filepath );
		var contents = grunt.file.read( filepath );

		return {
			name: path.basename( filepath ),
			size: formatSize( contents.length ),
			gzipped: formatSize( zlib.gzipSync( contents, { level: 9 } ).length )
		};
	}

	function formatSize( size ) {
		var i = Math.floor( Math.log( size ) / Math.log( 1024 ) );
		return ( size / Math.pow( 1024, i ) ).toFixed( 2 ) * 1 + '' + [ 'B', 'kB', 'MB', 'GB', 'TB' ][ i ];
	}
};
