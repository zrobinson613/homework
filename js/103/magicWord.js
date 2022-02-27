module.exports = (req, res, next) => {
    let magic = req.searchParams.get('magicWord');
    if (magic === 'please') {
        next();
    }
    else {
        throw new Error("what's the magic word?????")
    }
}