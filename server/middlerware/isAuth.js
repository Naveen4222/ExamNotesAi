import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;
        if (!token) {
            return res.status(400).json({ msg: "Token is not found" })
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            res.status(400).json({ msg: "user doesn't have valid token" })
        }
        req.userId = verifyToken.userId;
        next();

    } catch (error) {
        return res.status(500).json({message:`is auth error ${error}`})
    }
}

export default isAuth;