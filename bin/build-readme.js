const path = require('path');
const zlib = require('zlib');
const fs = require('fs');

const content = interpolate(fs.readFileSync('README.tpl.md').toString(), {
    pkg: require('../package.json'),
    files: {
        main: getFile('dist/most-visible.js'),
        min: getFile('dist/most-visible.min.js')
    }
});

fs.writeFileSync('README.md', content)

function getFile(filepath) {
    const contents = fs.readFileSync(filepath).toString();

    return {
        name: path.basename(filepath),
        size: formatSize(contents.length),
        gzipped: formatSize(zlib.gzipSync(contents, {level: 9}).length)
    };
}

function formatSize(size) {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + '' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}

function interpolate(template, data) {
    return template.replace(/{{\s*([^}\s]+)\s*}}/g, function(match, capture) {
        return reach(data, capture) || '';
    });
}

function reach(obj, path) {
    let result = obj;
    const parts = path.split('.');
    for (const i in parts) {
        result = result[parts[i]] || undefined;
        if (!result) {
            break;
        }
    }

    return result;
}
