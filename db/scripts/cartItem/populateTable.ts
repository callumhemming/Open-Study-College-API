import { cartItemData } from "./dummyData.js";
import db from "../../index.js"
import {CartItem} from "../../../types"




(async ()=>{

    async function populateTable(data:CartItem){
        const {userID, courseSelected, cost} = data
        
        await db.query(`
        
        INSERT INTO cartItems(userID, courseSelected, cost)
        VALUES ($1, $2, $3)
        `,[userID,courseSelected, cost])

    }    


    cartItemData.forEach(v=>populateTable(v))


})()
