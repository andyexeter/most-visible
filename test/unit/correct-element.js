/* global QUnit:false, $:false */
QUnit.test( 'when scrolled to bottom, last element should be most visible', function( assert ) {
	'use strict';

	var done = assert.async();

	$( function() {
		var $elements = $( '#elements' ).find( '.element' ),
			$element  = $elements.eq( -1 );

		window.scrollTo( 0, document.documentElement.scrollHeight );

		assert.strictEqual( $elements.mostVisible().get( 0 ), $element.get( 0 ), 'last element was most visible' );

		window.scrollTo( 0, 0 );

		done();
	} );

} );
