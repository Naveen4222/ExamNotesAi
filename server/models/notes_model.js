import mongoose from "mongoose";

// User Schema created
const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"UserMode",
        required: true
    },
    topic: {
        type: String,
        required: true,
        
    },
    classLevel: String,
    examType:String ,
    revisionMode:{
        type: Boolean,
        default: false,
    },
    includeDiagram : Boolean,
    includeChart : Boolean,

    content: {
        type: mongoose.Schema.Types.Mixed, // AI response (string /JSON)
        required:true
    }



}, 
{ timestamps: true }
);

// User model/collection created
const Notes = new mongoose.model("Notes",notesSchema);

export default Notes;