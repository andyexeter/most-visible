function reach(obj, path) {
    let result = obj;
    const parts = path.split('.');

    for (let i = 0; i < parts.length; i += 1) {
        result = result[parts[i]] || undefined;
        if (!result) {
            break;
        }
    }

    return result;
}

function interpolate(template, data) {
    return template.replace(/{{\s*([^}\s]+)\s*}}/g, (match, capture) => reach(data, capture) || '');
}

export default interpolate;
