const jwt = require("jsonwebtoken");
const User = require("./../models/user");
const blacklistedTokens = require("./../utils/blacklist");

const authMiddleware = async (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Not authorized, no token" });

    if (blacklistedTokens.has(token)) {
        return res.status(401).json({ message: "Token is blacklisted (logged out)" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }
};

const authRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }

        next();
    };
}

module.exports = {
    authMiddleware,
    authRoles
};