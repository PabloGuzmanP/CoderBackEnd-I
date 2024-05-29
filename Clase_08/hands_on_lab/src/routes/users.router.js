import { Router } from "express";

const router = Router();
const users = [];

router.get("/", (req, res) => {

    res.status(200).send({state: "success", data: users});
});

router.post("/", (req, res) => {
    const {name, lastname} = req.body;
    const user = {name, lastname};
    users.push(user);

    res.status(201).send({state: "success", data: user});
});

export default router;