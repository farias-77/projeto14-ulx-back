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
export async function  addCart(req, res) {
    const {email,id} = req.body;
   
    const usar = await db.collection("users").findOne({email:email})
    const usar2 = await db.collection("product").findOne({_id:  new ObjectId(id)})

    await db.collection("cart").insertOne({ url:usar2.url, name:usar2.name, description:usar2.description,category:usar2.category,userId:usar2.userId,price:usar2.price});
   console.log(id)
   console.log(usar2.name)

    return res.status(200).send("Produto criado com sucesso");
}

export async function  cart(req, res) {
    const {email}=req.body;
  
 
    const usar = await db.collection("users").findOne({email:email}) 
    const pds = await db.collection("cart").find().toArray();
   
    const userId =usar._id
    const produtos = pds.filter( pd => (pd.userId.toString() == userId));
   
    
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
  
   
    
    return res.send( Produto);
   
}

export async function  creationHistoric(req, res) {
    const {email}=req.body;
  
   
    const usar = await db.collection("users").findOne({email:email}) 
    const pds = await db.collection("cart").find().toArray();
   
    const userId =usar._id
    const Produto = pds.filter( pd => (pd.userId.toString() == userId));
    
  
   for(let i=0;Produto.length>i;i++){
    const idd =Produto[i].userId
    
    await db.collection("historic").insertOne(Produto[i]);
    const usersColection = db.collection("cart");
    await usersColection.deleteOne({ userId:   idd})
   }
    
   return res.status(200).send("Historico criado com sucesso");
   
}