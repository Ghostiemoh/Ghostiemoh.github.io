const wrapLabel = (label, maxLength = 16) => {
    if (label.length <= maxLength) {
        return label;
    }
    const words = label.split(' ');
    const lines = [];
    let currentLine = '';
    for (const word of words) {
        if ((currentLine + ' ' + word).trim().length > maxLength) {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = (currentLine + ' ' + word).trim();
        }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
};

if (typeof module !== 'undefined') {
    module.exports = { wrapLabel };
}
