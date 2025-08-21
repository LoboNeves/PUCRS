const { ObjectId } = require("mongodb");

module.exports = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).json({ message: "Invalid id" });
    next();
};