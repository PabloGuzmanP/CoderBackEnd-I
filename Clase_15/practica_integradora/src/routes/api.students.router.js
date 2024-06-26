import {Router} from "express";
import StudentManager from "../managers/StudentsManager.js";
import uploader from "../utils/uploader.js";

const router = new Router();
const studentManager = new StudentManager();

router.get("/", async (req, res) => {
    try {
        const students = await studentManager.getAll();
        res.status(200).json({status: true, payload: students});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({status: false, message: "Hubo un error en el servidor"});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const studentFound = await studentManager.getOneId(req.params.id);

        if (!studentFound) {
            return res.status(404).json({status: false, message: "Id incorrecto"});
        }

        res.status(200).json({status: true, payload: studentFound});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({status: false, message: "Hubo un error en el servidor"});
    }
});

router.post("/", uploader.single("file"), async (req, res) => {
    try {
        const { file } = req;
        req.body.thumbnail = file.filename ?? null;

        const student = await studentManager.insertOne(req.body);

        res.status(201).json({status: true, payload: student});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({status: false, message: "Hubo un error en el servidor"});
    }
});

router.put("/:id", uploader.single("file"), async (req, res) => {
    try {
        const { file } = req;
        req.body.thumbnail = file?.filename ?? null;

        const studentFound = await studentManager.getOneId(req.params.id);

        if (!studentFound) {
            return res.status(404).json({status: false, message: "Id incorrecto"});
        }

        const studentUpdate = await studentManager.updateOneByID(req.params.id, studentFound.thumbnail, req.body)

        res.status(200).json({status: true, payload: studentUpdate});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({status: false, message: "Hubo un error en el servidor"});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const studentFound = await studentManager.getOneId(req.params.id);

        if (!studentFound) {
            return res.status(404).json({status: false, message: "Id incorrecto"});
        }

        await studentManager.deleteOneByID(req.params.id, studentFound.thumbnail);

        res.status(200).json({status: true, payload: studentFound});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({status: false, message: "Hubo un error en el servidor"});
    }
});

export default router;