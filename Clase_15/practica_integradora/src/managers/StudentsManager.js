import StudentModel from "../models/student.model.js";
import mongoDB from "../config/mongoose.config.js";
import fileSystem from "../utils/fileSystem.js"

class StudentManager {
    #studentModel

    constructor(){
        this.#studentModel = StudentModel;
    }

    getAll = async () => {
        const students = await this.#studentModel.find();
        return students;
    };

    getOneId = async (id) => {
        if (!mongoDB.isValidID(id)) {
            return null;
        }
        const student = await this.#studentModel.findById(id);
        return student;
    };

    insertOne = async (data) => {
        try {
            const student = new StudentModel(data);
            await student.save();

            return student;
        } catch (error) {
            console.log(error.message);
            await fileSystem.deleteImage(data.thumbnail);
            throw new Error("Faltan Datos");
        }
    };

    updateOneByID = async (id, thumbnail, data) => {
        try {
            if (!mongoDB.isValidID(id)) {
                return null;
            }
            const options = {
                // Devolucion del objeto especificado, sino devolveria el viejo
                new: true
            };
            const student = await this.#studentModel.findByIdAndUpdate(id, data, options);

            if (thumbnail != data.thumbnail) {
                await fileSystem.deleteImage(thumbnail);
            }
            return student;
        } catch (error) {
            console.log(error);
            throw new Error("Faltan Datos");
        }
    };

    deleteOneByID = async (id, thumbnail) => {
        if (!mongoDB.isValidID(id)) {
            return null;
        }

        const student = await this.#studentModel.findByIdAndDelete(id);

        await fileSystem.deleteImage(thumbnail);

        return student;
    };
}

export default StudentManager;