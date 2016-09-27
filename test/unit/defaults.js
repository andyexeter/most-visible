/* global QUnit:false, $:false, mostVisible:false */
QUnit.test( 'change default options', function( assert ) {
	'use strict';

	var defaults = $.extend( {}, mostVisible.defaults );

	mostVisible.defaults.percentage = !mostVisible.defaults.percentage;

	// Change a default option value.
	var instance = new mostVisible( document.querySelectorAll( '#elements .element' ) );

	assert.notStrictEqual( instance.options.percentage, defaults.percentage, 'default value changed' );

	// Revert the default option value change.
	mostVisible.defaults.percentage = !mostVisible.defaults.percentage;

	var instance2 = new mostVisible( document.querySelectorAll( '#elements .element' ) );

	assert.strictEqual( instance2.options.percentage, defaults.percentage, 'default value reverted' );

	// Change an instance's option value from its default value.
	var instance3 = new mostVisible( document.querySelectorAll( '#elements .element' ), { percentage: !defaults.percentage } );

	assert.notStrictEqual( instance3.options.percentage, defaults.percentage, 'instance value changed from default' );

} );
