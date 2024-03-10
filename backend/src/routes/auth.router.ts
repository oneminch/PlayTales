import { Router } from "express";
import { signUp, logIn, logOut } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/login", logIn);

authRouter.post("/logout", logOut);

authRouter.post("/signup", signUp);

export default authRouter;
