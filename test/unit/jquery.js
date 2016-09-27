QUnit.test( 'jquery plugin', function( assert ) {
	'use strict';

	var $element = $( '#elements' ).find( '.element' ).mostVisible();

	assert.isJQuery( $element, 'we have a jQuery element.' );
	assert.isElement( $element.get( 0 ), 'we have an element.' );

} );
