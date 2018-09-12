(function () {
    'use strict';

    console.log(navigator.userAgent);

    // Inject full or minified version of script
    var src = '../dist/most-visible' + (getUserAgentQuery().min ? '.min' : '') + '.js';
    console.log('');
    console.log('Using ' + src);
    injectScript(src);

    // Inject tests
    [
        'global-attached',
        'defaults',
        'jquery',
        'fn-call',
        'selector',
        'instance',
        'get-visible-height',
        'correct-element',
        'correct-element-percentage'
    ].forEach(function (value) {
        injectScript('unit/' + value + '.js');
    });

    function injectScript(src) {
        var script = document.createElement('script');

        script.src = src;

        document.head.appendChild(script);
    }

    function getUserAgentQuery() {
        var parts = navigator.userAgent.split('?'),
            obj   = {};

        if (parts.length > 1) {
            var query = parts[1].split('&'),
                pair;

            for (var i = 0; i < query.length; i++) {
                pair = query[i].split('=');
                obj[pair[0]] = pair[1];
            }
        }

        return obj;
    }
})();
