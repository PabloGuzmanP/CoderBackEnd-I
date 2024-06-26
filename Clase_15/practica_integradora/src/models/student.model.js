import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {type: String, require: true, uppercase: true, trim: true},
    surname: {type: String, require: true, uppercase: true, trim: true},
    email: {type: String, require: true, trim: true},
    thumbnail: {type: String, require: true}
});

const StudentModel = model("students", studentSchema);

export default StudentModel;