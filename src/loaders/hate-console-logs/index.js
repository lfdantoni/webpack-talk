module.exports = function (source, map) {
    this.callback(
        null,
        source.replace(/console\.log\(.*\);?\n/g, ''),
        source,
        map
    );
    return;
}