QUnit.test( 'getVisibleHeight returns a number', function( assert ) {
	'use strict';

	var elements = document.querySelectorAll( '#elements .element' ),
		instance = new mostVisible( elements ),
		height   = instance.getVisibleHeight( elements[ 0 ] );

	assert.ok( typeof height === 'number', 'we have a number. (' + height + ')' );

	instance.options.percentage = true;

	height = instance.getVisibleHeight( elements[ 0 ] );

	assert.ok( typeof height === 'number' && height <= 100, 'we have a percentage. (' + height + ')' );

} );
