import { Router } from "express";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";
import cartproductRouter from "./cartproductRouter.js";

const router = Router();

router.use(authRouter);
router.use(productsRouter);
router.use(cartproductRouter);

export default router;
