module.exports = {
    dist: {
        options: {
            plugins: [
                ['@babel/plugin-transform-arrow-functions'],
                ['@babel/plugin-transform-block-scoping']
            ]
        },
        files: {
            'dist/most-visible.js': 'dist/most-visible.js'
        }
    }
};
