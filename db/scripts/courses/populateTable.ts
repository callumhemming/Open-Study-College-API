import { coursesData } from "./dummyData.js";
import db from "../../index.js"
import {CourseData} from "../../../types"

/*
    CREATE TABLE IF NOT EXISTS courses(
        courseID SERIAL PRIMARY KEY,
        courseCode TEXT,
        name TEXT,
        tag TEXT,
        atAGlance text[],
        overview text[],
        extraInfo text[],
        examDetails JSON
    )
    RETURNING *
*/



(async ()=>{

    async function populateTable(data:CourseData){
        const {courseCode, name, tag, atAGlance, overview, extraInfo,examDetails} = data
        
        await db.query(`
        
        INSERT INTO courses(courseCode, name, tag, atAGlance, overview, extraInfo, examDetails)
        VALUES ($1, $2, $3, $4, $5, $6,$7)
        `,[courseCode, name, tag, atAGlance, overview, extraInfo, examDetails])

    }    


    coursesData.forEach(v=>populateTable(v))


})()
