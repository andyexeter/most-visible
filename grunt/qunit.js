module.exports = {
    dist: {
        options: {
            page: {
                viewportSize: {height: 966},
                settings: {
                    userAgent: 'grunt-contrib-qunit phantomjs'
                }
            }
        },
        src: 'test/index.html'
    },
    min: {
        options: {
            page: {
                viewportSize: {height: 966},
                settings: {
                    userAgent: 'grunt-contrib-qunit phantomjs?min=1'
                }
            }
        },
        src: 'test/index.html'
    }
};
