import {Router} from "express";
import MovieModel from "../models/movie.model.js";

const router = new Router();

router.get("/explain", async (req, res) => {
    const result = await MovieModel.find({title: "Frankenstein"}).explain();
    console.log(result.executionStats);
        res.status(200).json({status: true, payload: result});
});

export default router;