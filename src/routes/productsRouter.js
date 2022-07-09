import { Router } from "express";
import { getProductsArray, getProductInfo } from "../controllers/productsController.js";
import db from "../db/db.js";
import { v4 as uuid } from "uuid";

const productsRouter = Router();

productsRouter.get("/products", getProductsArray);
productsRouter.get("/products/:productId", getProductInfo);



// ROTA APENAS PARA SIMULAR UM BD, SERÁ APAGADA DEPOIS
productsRouter.post("/insert", async (req, res) => {
    const newId = uuid();
    const a = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        url: req.body.url,
        category: req.body.category,
        id: newId
    }

    await db.collection('products').insertOne(a)
    res.sendStatus(200);
})

export default productsRouter;