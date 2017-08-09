

export function lineBreakToSpace(str) {
    return str.replace(/\r?\n|\r/g, ' ');
}

export function onlyAphabetic(str) {

    return str.replace(/[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff-]+/g, '');
}