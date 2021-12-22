const path = require('path');
const zlib = require('zlib');
const fs = require('fs');
const interpolate = require('./lib/interpolate');
const formatSize = require('./lib/format-size');

function getFile(filepath) {
    const contents = fs.readFileSync(filepath).toString();

    return {
        name: path.basename(filepath),
        size: formatSize(contents.length),
        gzipped: formatSize(zlib.gzipSync(contents, { level: 9 }).length),
    };
}

const content = interpolate(fs.readFileSync('README.tpl.md').toString(), {
    // eslint-disable-next-line global-require
    pkg: require('../package.json'),
    files: {
        main: getFile('dist/most-visible.js'),
        min: getFile('dist/most-visible.min.js'),
    },
});

fs.writeFileSync('README.md', content);
