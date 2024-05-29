import { Router } from "express";

const router = Router();
const pets = [];

router.get("/", (req, res) => {

    res.status(200).send({state: "success", data: pets});
});

router.post("/", (req, res) => {
    const {name, specie} = req.body;
    const pet = {name, specie};
    pets.push(pet);

    res.status(201).send({state: "success", data: pet}).redirect("http://localhost:8080/public");
});

export default router;