import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

import { body } from "express-validator"; //validador de express
const router = Router();

//express-validation MIDDLEWARES
const parametros = [
    body("email")
    .isEmail()
    .withMessage("debe ser un email valido"),
    body("password")
    .isLength({min:8})
    .withMessage("la contraseña debe tener al menos 8 caracteres")
]
//routes
router.post("/login",parametros,login)

router.post("/register",parametros, register)


export default router;