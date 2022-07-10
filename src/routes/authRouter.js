import { Router } from "express";

import { signIn, signUp } from "../controllers/authController.js";
import userSignInSchemaValidationMiddleware from "../middlewares/userSignInSchemaValidationMiddleware.js";
import userSignUpSchemaValidationMiddleware from "../middlewares/userSignUpSchemaValidationMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", userSignUpSchemaValidationMiddleware, signUp);
authRouter.get("/sign-up", (req, res) => {
    res.send("Vai vendo - sign-up");
});
authRouter.post("/sign-in", userSignInSchemaValidationMiddleware, signIn);
authRouter.get("/sign-in", (req, res) => {
    res.send("Vai vendo - sign-in");
});


export default authRouter;
