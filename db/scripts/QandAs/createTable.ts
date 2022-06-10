import db from "../../index.js"

/*
QandAs:
    SERIAL PRIMARY KEY
    Course Code
    Question
    Answer
*/

(async ()=>{


    await db.query(`
    CREATE TABLE IF NOT EXISTS qandas(
        qandaID SERIAL PRIMARY KEY,
        courseCode TEXT,
        question TEXT,
        answer TEXT
    )
    `)



})()