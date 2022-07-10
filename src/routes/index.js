import { Router } from "express";
import authRouter from "./authRouter.js";
import productRouter from "./productRouter.js";

const router = Router();

router.use(productRouter);
router.use(authRouter);


export default router;
