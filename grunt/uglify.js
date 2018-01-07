module.exports = {
    dist: {
        options: {
            sourceMap: false,
            report: 'gzip',
            output: {
                comments: /(?:^!|@(?:license|preserve|cc_on))/
            }
        },
        src: '<%= files.main %>',
        dest: '<%= files.min %>'
    }
};
