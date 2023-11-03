import { Router } from "express";
import LoginController from "../controllers/LoginController.js";


const AuthRouter = Router();

AuthRouter.post('/', LoginController.login)


export default AuthRouter;