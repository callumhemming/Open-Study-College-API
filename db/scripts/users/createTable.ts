import db from "../../index.js"



(async ()=>{


    try{
        await db.query(`
        CREATE TABLE IF NOT EXISTS users(
            usersTableID SERIAL PRIMARY KEY,
            userID text,
            name text
        )
        `)

    } catch(err){
        console.log(err, "Broke")
    }





})()