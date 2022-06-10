import db from "../../index.js"

/*
Courses:
    SERIAL PRIMARY KEY
    Code: string
    Name: string: 
    Tag: string
    Overview: string[]
    Extra Info: String[]
    At a glance
    Exam details: [{Title, Content},{}] // JSON
*/

(async ()=>{


    try{
        await db.query(`
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
    
        `)

    } catch(err){
        console.log(err)
    }





})