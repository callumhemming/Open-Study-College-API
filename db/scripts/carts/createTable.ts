import db from "../../index.js"



(async ()=>{


    try{
        await db.query(`
        CREATE TABLE IF NOT EXISTS carts(
            shoppingCartID SERIAL PRIMARY KEY,
            userID text,
            totalCost integer
        )
        `)

    } catch(err){
        console.log(err, "Broke")
    }





})()