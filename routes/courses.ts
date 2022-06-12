import express from "express";

import { APIres, CourseData } from "../types";
import {
getAllCourses,
getCourseByID,
createNewCourse,
replaceCourseByID,
deleteCourseByID
} from "../models/courses.js"
import { nextTick } from "process";


const router = express.Router();

//CRUD
//Create
//Read
//Update
//Delete



router.get("/", async (req,res)=>{
    
    const allCourseData :APIres  = await getAllCourses()

    if (allCourseData.success === false){
        res.status(500).json(allCourseData)
    }

    res.json(allCourseData)
   
})

router.get("/:id", async (req,res)=>{
    
    const courseDataByID :APIres | void  = await getCourseByID(req.params.id)

    if (courseDataByID.success === false){
        res.status(500).json(courseDataByID)
    }

    res.json(courseDataByID)
   
})

router.post("/", async (req,res)=>{
    
    const {body }= req
    
    const courseDataByID :APIres  = await createNewCourse(body)

    if (courseDataByID.success === false){
        res.status(500).json(courseDataByID)
    }

    res.json(courseDataByID)
   
})




//Update
router.put("/:id", async (req,res, next)=>{
    
    const {body} = req

    console.log("changList here >",body.changeList)

    // res.send("Hello")

    const putResponseByID :APIres  = await replaceCourseByID(req.params.id, body.changeList)

    if (putResponseByID.success === false){
        res.status(500).json(putResponseByID)
    }

    res.json(putResponseByID)
   
})

//Delete
router.delete("/:id", async (req,res)=>{
    
    const {body} = req
    
    const deleteResponseByID :APIres | void  = await deleteCourseByID(req.params.id)

    if (deleteResponseByID.success === false){
        res.status(500).json(deleteResponseByID)
    }

    res.json(deleteResponseByID)
   
})


export default router;