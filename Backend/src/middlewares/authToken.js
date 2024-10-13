const jwt = require("jsonwebtoken");
const register = require("../models/register.model");

const generateToken = (userId) => {
    let token = jwt.sign({ id: userId }, process.env.JWT_KEY, { expiresIn: '1h' });
    return token;
};

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(404).json({ message: "user must LogedIn" })
    }
    let withoutToken = token.split(' ')[1]
    try {
        let payload = jwt.verify(withoutToken, process.env.JWT_KEY);

        let checkUser = await register.findOne({ userId: payload.id })
        if (!checkUser) {
            return res.status(404).json({ message: "user not found" })
        };

        req.userId = checkUser.userId;
        next();
    } catch (error) {
        res.json({ message: `Invalid Token ${error}`})
    }

};

module.exports = {
    generateToken,
    verifyToken
};