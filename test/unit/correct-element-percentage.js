/* global QUnit:false, $:false */
QUnit.test('when scrolled 20px past the top element and percentage is true, middle element should be most visible', function (assert) {
    'use strict';

    var done = assert.async();

    $(function () {
        var $elements = $('#elements').find('.element'),
            $element  = $elements.eq(1);

        window.scrollTo(0, $elements.eq(0).offset().top + 20);

        assert.strictEqual($elements.mostVisible({percentage: true}).get(0), $element.get(0), 'middle element was most visible');

        window.scrollTo(0, 0);

        done();
    });

});
