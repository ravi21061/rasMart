const User = require("./../models/user");
const bcrypt = require("bcryptjs");
const { generateAccessToken, generateRefreshToken } = require("./../utils/generateToken");
const blacklistedTokens = require("./../utils/blacklist");

async function handleUserSignup(req, res) {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "Email already registerd" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword, role });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
        accessToken,
        user: { id: user._id, name: user.name, role: user.role }
    });
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
        accessToken,
        user: { id: user._id, name: user.name, role: user.role }
    });
}

async function handleUserMe(req, res) {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
}

async function handleRefreshToken(req, res) {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: "Refresh token missing" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({ message: "User not found" });

        const accessToken = generateAccessToken(user);
        res.json(accessToken);
    } catch (error) {
        return res.status(403).json({ message: "Invalid refresh token" });
    }
}

async function handleUserLogout(req, res) {
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        blacklistedTokens.add(token);
    }

    res.clearCookie("refreshToken");
    res.json({ message: "Logged Out successfully" });
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleUserMe,
    handleRefreshToken,
    handleUserLogout
};