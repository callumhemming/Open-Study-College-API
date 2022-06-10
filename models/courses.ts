import { PostBody } from "../types";
import db from "../db"

export async function getAllCourses(){

}

export async function getCourseByID(id){

}

export async function createNewCourse(body : PostBody){

    const {courseCode, name, tag, atAGlance, overview, extraInfo,examDetails} = body
        
    const response = await db.query(`
    INSERT INTO courses(courseCode, name, tag, atAGlance, overview, extraInfo, examDetails)
    VALUES ($1, $2, $3, $4, $5, $6,$7)
    RETURNING *
    `,[courseCode, name, tag, atAGlance, overview, extraInfo, examDetails])
    

}

export async function replaceCourseByID(id, body : PostBody){

}

export async function deleteCourseByID(id){

}