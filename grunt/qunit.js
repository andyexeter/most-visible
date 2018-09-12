module.exports = function () {
    'use strict';

    var merge = require('lodash/merge');

    var options = {
        puppeteer: {
            headless: true,
            defaultViewport: {
                width: 1024,
                height: 966
            },
            args: [
                '--user-agent=qunit',
                '--no-sandbox'
            ]
        }
    };

    return {
        dist: {
            options: options,
            src: 'test/index.html'
        },
        min: {
            options: merge({}, options, {
                puppeteer: {
                    args: [
                        '--user-agent=qunit?min=1'
                    ]
                }
            }),
            src: 'test/index.html'
        }
    };
};
