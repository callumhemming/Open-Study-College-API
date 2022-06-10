import { usersData } from "./dummyData.js";
import db from "../../index.js"
import {User} from "../../../types"




(async ()=>{

    async function populateTable(data:User){
        const {name, userID} = data
        
        await db.query(`
        
        INSERT INTO users(userID, name)
        VALUES ($1, $2)
        `,[userID, name])

    }    


    usersData.forEach(v=>populateTable(v))


})()
