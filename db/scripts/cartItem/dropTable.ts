import db from "../../index.js"





(async ()=>{

    db.query(`
    DROP TABLE cartItems
    `)
})()