import express from "express";

import { APIres, Cart } from "../types";
import {
getAllCarts,
getCartByID,
createNewCart,
replaceCartByID,
deleteCartByID
} from "../models/carts.js"

const router = express.Router();

//CRUD
//Create
//Read
//Update
//Delete

router.get("/", async (req,res)=>{
    
    const allCartData :APIres  = await getAllCarts()

    if (allCartData.success === false){
        res.status(500).json(allCartData)
    }

    res.json(allCartData)
   
})

router.get("/:id", async (req,res)=>{
    
    const cartDataByID :APIres  = await getCartByID(req.params.id)

    if (cartDataByID.success === false){
        res.status(500).json(cartDataByID)
    }

    res.json(cartDataByID)
   
})

router.post("/", async (req,res)=>{
    
    const { body } =  req
    
    const response :APIres = await createNewCart(body)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

//Update
router.put("/:id", async (req,res)=>{
    
    const {body} = req
    
    const response :APIres = await replaceCartByID(req.params.id, body.changeList)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

//Delete
router.delete("/:id", async (req,res)=>{
    
    const {body} = req
    
    const response :APIres  = await deleteCartByID(req.params.id)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})


export default router;