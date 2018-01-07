module.exports = {
    dist: {
        options: {
            sourceMap: false,
            report: 'gzip',
            preserveComments: /(?:^!|@(?:license|preserve|cc_on))/
        },
        src: '<%= files.main %>',
        dest: '<%= files.min %>'
    }
};
