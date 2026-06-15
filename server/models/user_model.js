import mongoose from "mongoose";

// User Schema created
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    notes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Notes",
        default: []
    }



}, 
{ timestamps: true }
);

// User model/collection created
const userModel = new mongoose.model("User",userSchema);

export default userModel;