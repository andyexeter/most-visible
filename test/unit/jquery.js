/* global QUnit:false, $:false */
QUnit.test( 'jquery plugin', function( assert ) {
	'use strict';

	assert.expect( 2 );

	var done = assert.async( 2 );

	$( function() {
		var $element = $( '#elements' ).find( '.element' ).mostVisible();

		assert.ok( $element instanceof $, 'we have a jQuery element.' );
		done();

		assert.ok( $element.get( 0 ) instanceof HTMLElement, 'we have an element.' );
		done();
	} );

} );
