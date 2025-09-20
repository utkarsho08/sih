import jwt from "jsonwebtoken";


export const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Expect "Bearer <token>"
    console.log("Token from header:", token);
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // add user id to request
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid token" });
    }
};