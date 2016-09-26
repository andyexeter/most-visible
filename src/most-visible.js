/*!
 * Most Visible
 *
 * Returns the most visible element from a given set
 * of elements.
 *
 * @author Andy Palmer <andy@andypalmer.me>
 * @licence GPLv3 or later
 */
(function( root, factory ) {
	'use strict';

	if ( typeof define === 'function' && define.amd ) {
		define( [], factory );
	} else if ( typeof module === 'object' && module.exports ) {
		module.exports = factory( root );
	} else {
		root.MostVisible = factory( root );
	}

}( this, function( window ) {
	'use strict';

	function MostVisible( elements, options ) {
		if ( !(this instanceof MostVisible) ) {
			return (new MostVisible( elements, options )).getMostVisible();
		}

		this.elements = elements;
		this.options = extend( {}, MostVisible.defaults, options );
		this.viewportHeight = document.documentElement.clientHeight;
	}

	MostVisible.defaults = {
		percentage: false
	};

	MostVisible.prototype = {
		/**
		 * @returns {Element} Most visible element.
		 */
		getMostVisible: function() {
			var element = null,
				maxVisible = 0;

			for ( var i = 0; i < this.elements.length; i++ ) {
				var currentVisible = this.getVisibleHeight( this.elements[ i ] );

				if ( currentVisible > maxVisible ) {
					maxVisible = currentVisible;
					element = this.elements[ i ];
				}
			}

			return element;
		},

		/**
		 *
		 * @param {Element} element Element to check the visibility of.
		 * @returns {number} The visible height of the element in pixels or a percentage of the element's total height.
		 */
		getVisibleHeight: function( element ) {
			var rect = element.getBoundingClientRect(),
				height = rect.bottom - rect.top,
				visible = {
					top: rect.top >= 0 && rect.top < this.viewportHeight,
					bottom: rect.bottom > 0 && rect.bottom < this.viewportHeight
				},
				visiblePx = 0;

			if ( visible.top && visible.bottom ) {
				// Whole element is visible
				visiblePx = height;
			} else if ( visible.top ) {
				visiblePx = this.viewportHeight - rect.top;
			} else if ( visible.bottom ) {
				visiblePx = rect.bottom;
			} else if ( height > this.viewportHeight && rect.top < 0 ) {
				var absTop = Math.abs( rect.top );

				if ( absTop < height ) {
					// Part of the element is visible
					visiblePx = height - absTop;
				}
			}

			if ( this.options.percentage ) {
				return (visiblePx / height) * 100;
			}

			return visiblePx;
		}
	};

	MostVisible.makeJQueryPlugin = function( $ ) {
		$ = $ || window.jQuery;

		if ( !$ ) {
			return;
		}

		$.fn.mostVisible = function( options ) {
			var instance = new MostVisible( this.get(), options ),
				element = instance.getMostVisible();

			if ( !element ) {
				return $( [] );
			}

			return $( element );
		};
	};

	MostVisible.makeJQueryPlugin();

	function extend() {
		for ( var i = 1; i < arguments.length; i++ ) {
			for ( var key in arguments[ i ] ) {
				if ( arguments[ i ].hasOwnProperty( key ) ) {
					arguments[ 0 ][ key ] = arguments[ i ][ key ];
				}
			}
		}

		return arguments[ 0 ];
	}

	return MostVisible;

} ));
