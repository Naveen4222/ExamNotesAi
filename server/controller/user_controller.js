import userModel from "../models/user_model.js";

export const register = async (req, res) => {
    try {
        console.log(req.body);
        const response = req.body;
        console.log(response);
        if (!response) {
            res.status(400).json({ msg: "Invalid message" })
        };

        res.status(200).json(response);
        userModel.create({
            name: response.name,
            email: response.email,
            credits: response.credits,
            isCreditAvailable: response.isCreditAvailable
        });

    } catch (error) {
        console.log("register", error)
    }
}