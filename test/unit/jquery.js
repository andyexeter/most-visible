/* global QUnit:false, $:false */
QUnit.test( 'jquery plugin', function( assert ) {
	'use strict';

	assert.expect( 2 );

	var done = assert.async( 2 );

	$( function() {
		var $element = $( '#elements' ).find( '.element' ).mostVisible();

		assert.isJQuery( $element, 'we have a jQuery element.' );
		done();

		assert.isElement( $element.get( 0 ), 'we have an element.' );
		done();
	} );

} );
