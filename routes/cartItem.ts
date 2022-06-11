import express from "express";

import { APIres, CartItem } from "../types";
import {
getAllCartItems,
getCartItemsByUserID,
createNewCartItem,
replaceCartItemByID,
deleteCartItemByID
} from "../models/cartItem.js"

const router = express.Router();

//CRUD
//Create
//Read
//Update
//Delete

router.get("/", async (req,res)=>{
    
    const response :APIres  = await getAllCartItems()

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

router.get("/:id", async (req,res)=>{
    
    const response : APIres  = await getCartItemsByUserID(req.params.id)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

router.post("/", async (req,res)=>{
    
    const { body } =  req
    
    const response :APIres = await createNewCartItem(body)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

//Update
router.put("/:id", async (req,res)=>{
    
    const {body} = req
    
    const response :APIres = await replaceCartItemByID(Number(req.params.id), body)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

//Delete
router.delete("/:id", async (req,res)=>{
    
    const {body} = req
    
    const response :APIres  = await deleteCartItemByID(Number(req.params.id))

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})


export default router;