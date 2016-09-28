QUnit.config.scrolltop = false;

// Custom assertions
QUnit.assert.isElement = function( thing, message ) {
	this.ok( thing && thing.nodeType === 1, message );
};

QUnit.assert.isJQuery = function( thing, message ) {
	this.ok( thing && typeof thing.jquery !== 'undefined', message );
};
