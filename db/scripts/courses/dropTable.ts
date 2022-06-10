import db from "../.."





(async ()=>{

    db.query(`
    DROP TABLE courses
    `)
})