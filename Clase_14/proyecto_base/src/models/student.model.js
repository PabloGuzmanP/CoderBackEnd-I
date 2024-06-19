import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {type: String, required: true, uppercase: true},
    surname: {type: String, required: true, trim: true},
    age: {type: Number, min:18, max:65},
    email: {type: String, unique:true},
    isActive: {type: String, required: true},
    subjects: [String],
});

const StudentModel = model("students", studentSchema)

export default StudentModel;