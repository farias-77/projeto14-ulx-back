import { Router } from "express";
import authRouter from "./authRouter.js";
import cartproductRouter from "./cartproductRouter.js";

const router = Router();

router.use(cartproductRouter);
router.use(authRouter);


export default router;
