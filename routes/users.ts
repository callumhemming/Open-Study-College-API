import express from "express";

import { APIres, CartItem } from "../types";
import {
    getAllUsers,
    getUserByID,
    createNewUser,
    replaceUserByID,
    deleteUserByID
} from "../models/users.js"

const router = express.Router();

//CRUD
//Create
//Read
//Update
//Delete

router.get("/", async (req,res)=>{
    
    const response :APIres  = await getAllUsers()

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

router.get("/:id", async (req,res)=>{
    
    const response : APIres  = await getUserByID(req.params.id)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

router.post("/", async (req,res)=>{
    
    const { body } =  req
    
    const response :APIres = await createNewUser(body)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

//Update
router.put("/:id", async (req,res)=>{
    
    const {body} = req
    
    const response :APIres = await replaceUserByID(req.params.id, body.changeList)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})

//Delete
router.delete("/:id", async (req,res)=>{
    
    const {body} = req
    
    const response :APIres  = await deleteUserByID(req.params.id)

    if (response.success === false){
        res.status(500).json(response)
    }

    res.json(response)
   
})


export default router;