import {Router} from "express";
import StudentModel from "../models/student.model.js";

const router = new Router();

router.get("/", async (req, res) => {
    const students = await StudentModel.find({});
    res.json({status: true, payload: students})
})

export default router;