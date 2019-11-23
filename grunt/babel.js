module.exports = {
    dist: {
        options: {
            plugins: [
                ['@babel/plugin-transform-arrow-functions'],
                ['@babel/plugin-transform-block-scoping'],
                ['@babel/plugin-transform-for-of', {loose: true}],
            ]
        },
        files: {
            'dist/most-visible.js': 'dist/most-visible.js'
        }
    }
};
