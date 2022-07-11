import { ObjectId } from "mongodb";
import db from "../db/db.js";

export async function getProductsArray(req, res){

    const products = await db.collection("product").find().toArray();

    res.send(products);
}

export async function getProductInfo(req, res){

    const productId = req.params.productId;

    const product = await db.collection("product").findOne({_id: productId});

    res.send(product);
}