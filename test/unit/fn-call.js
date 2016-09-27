QUnit.test( 'vanilla js function call', function( assert ) {
	'use strict';

	var elements = document.querySelectorAll( '#elements .element' );

	var element = mostVisible( elements, {} );

	assert.isElement( element, 'we have an element.' );

} );
