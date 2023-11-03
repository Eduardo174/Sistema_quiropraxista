import { Router } from "express";
import ClientRouter from "./client.router.js";
import QuiroRouter from "./Quiro.router.js";
import AuthRouter from "./Auth.router.js";

const router = Router()

router.use('/cliente', ClientRouter)
router.use('/quiro', QuiroRouter)
router.use('/login',AuthRouter)

export default router;