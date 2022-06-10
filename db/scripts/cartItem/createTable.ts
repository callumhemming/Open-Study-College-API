import db from "../../index.js"



(async ()=>{


    try{
        await db.query(`
        CREATE TABLE IF NOT EXISTS cartItems(
            cartItemID SERIAL PRIMARY KEY,
            userID text,
            courseSelected text,
            cost integer
        )
        `)

    } catch(err){
        console.log(err, "Broke")
    }





})()