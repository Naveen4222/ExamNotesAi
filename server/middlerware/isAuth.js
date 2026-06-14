import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        console.log("Cookies:", req.cookies);

        const { token } = req.cookies || {};

        if (!token) {
            return res.status(401).json({
                msg: "Token not found",
            });
        }

        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        console.log(verifyToken);

        req.userId = verifyToken.userId;

        next();

    } catch (error) {
        console.error("isAuth error:", error);

        return res.status(500).json({
            message: error.message,
        });
    }
};

export default isAuth;