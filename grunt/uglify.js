module.exports = {
    dist: {
        options: {
            sourceMap: false,
            report: 'gzip',
            mangle: {
                properties: true
            },
            preserveComments: /(?:^!|@(?:license|preserve|cc_on))/
        },
        src: '<%= files.main %>',
        dest: '<%= files.min %>'
    }
};
