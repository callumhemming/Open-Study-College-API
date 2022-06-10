import { cartData } from "./dummyData.js";
import db from "../../index.js"
import { Cart } from "../../../types"




(async ()=>{

    async function populateTable(data:Cart){
        const {userID, totalCost} = data
        
        await db.query(`
        
        INSERT INTO carts(userID, totalCost)
        VALUES ($1, $2)
        `,[userID, totalCost])

    }    


    cartData.forEach(v=>populateTable(v))


})()