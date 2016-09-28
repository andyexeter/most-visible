/* global QUnit:false, mostVisible:false */
QUnit.test( 'new object instance and method call', function( assert ) {
	'use strict';

	var elements = document.querySelectorAll( '#elements .element' );

	var instance = new mostVisible( elements );

	var element = instance.getMostVisible();

	assert.ok( isElement( element ), 'we have an element.' );

	function isElement( element ) {
		return element && element.nodeType === 1;
	}

} );
