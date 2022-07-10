import { Router } from "express";
import { getProductsArray, getProductInfo } from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products", getProductsArray);
productsRouter.get("/products/:productId", getProductInfo);

export default productsRouter;