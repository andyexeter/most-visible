(function( addTest ) {
	'use strict';

	addTest( 'destroy method should remove all traces of plugin instance', {
		form: '#destroy',
		setup: function( $inputs ) {
			$inputs.eq( 0 ).val( '123456' );
		},
		afterSetup: function( $inputs ) {
			$inputs.groupRequired( 'destroy' );
			$inputs.prop( 'required', true );
		},
		onInvalid: function( assert ) {
			assert.ok( true, 'Form was not submitted.' );
		},
		onSubmit: function( assert ) {
			assert.ok( false, 'Form was submitted.' );
		}
	} );
})( $.fn.groupRequired.addUnitTest );
