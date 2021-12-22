function formatSize(size) {
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return `${(size / 1024 ** i).toFixed(2) * 1}${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
}

module.exports = formatSize;
