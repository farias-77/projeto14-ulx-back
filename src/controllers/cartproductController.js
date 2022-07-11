import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { MongoClient,ObjectId } from "mongodb";

import db from "../db/db.js";
export async function  creation(req, res) {
    const {email,url,name,description,category,price} = req.body;
   
    const usar = await db.collection("users").findOne({email:email}) 
   
   
    const userId =usar._id
  
   
    
    await db.collection("product").insertOne({ url, name, description,category,userId,price });
    return res.status(200).send("Produto criado com sucesso");
}
export async function  cart(req, res) {
    const {email}=req.body;
  
 
    const usar = await db.collection("users").findOne({email:email}) 
    const pds = await db.collection("cart").find().toArray();
   
    const userId =usar._id
    const produtos = pds.filter( pd => (pd.userId.toString() == userId));
    console.log(  produtos );
   
    
    return res.send( produtos);
   
}
export async function  YourProduct(req, res) {
    const {email}=req.body;
  
   console.log('oi')
   console.log( email)
    const usar = await db.collection("users").findOne({email:email}) 
    const pds = await db.collection("product").find().toArray();
   
    const userId =usar._id
    const  produtos = pds.filter( pd => (pd.userId.toString() == userId));
    console.log( produtos );
   
    
    return res.send( produtos);
   
}
export async function  cartdelete(req, res) {
    const {id}=req.body;
  
   
   const usersColection = db.collection("cart");
	await usersColection.deleteOne({ _id:  new ObjectId(id)  })
   
    
    return res.status(200).send("Produto criado com sucesso");
   
}
export async function  yourdelete(req, res) {
    const {id}=req.body;
 
   
   const usersColection = db.collection("product");
	await usersColection.deleteOne({ _id:  new ObjectId(id)  })
   
  
    return res.status(200).send("Produto criado com sucesso");
   
}

export async function  historic(req, res) {
    const {email}=req.body;
  
   
    const usar = await db.collection("users").findOne({email:email}) 
    const pds = await db.collection("historic").find().toArray();
   
    const userId =usar._id
    const Produto = pds.filter( pd => (pd.userId.toString() == userId));
    console.log(  Produto );
   
    
    return res.send( Produto);
   
}