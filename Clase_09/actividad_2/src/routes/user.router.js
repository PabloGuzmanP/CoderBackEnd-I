import users from "../users.js";
import food from "../food.js";
import Router from "express";

const router = Router();

router.get("/", (req, res) => {
    console.log("GET /api/users hit"); // Debug log
    console.log("Users:", users);
    console.log("Food:", food);
    
    const randomId = Math.floor(Math.random() * users.length);
    const user = users[randomId];
    const isAdmin = user.role === "admin"

    res.render("users", {title: "Usuarios", user, isAdmin, food}); // Conexion de express con el endpoint y la plantilla.
});

export default router;