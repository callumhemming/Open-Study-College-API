import db from "../../index.js"






(async ()=>{
    await db.query(`
    
    DROP TABLE qandas
    
    `)
})