import { Router } from "express";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";

const router = Router();

router.use(productsRouter);
router.use(authRouter);

export default router;
