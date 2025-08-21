function parseListParams(query) {
    const limit = Math.max(parseInt(query.limit, 10) || 100, 1);
    const skip = Math.max(parseInt(query.skip, 10) || 0, 0);
    return { limit, skip };
}

module.exports = {
    parseListParams,
};