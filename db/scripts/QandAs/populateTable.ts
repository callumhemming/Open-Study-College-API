import { QandAData } from "./dummyData.js";
import {QandA} from "../../../types"
import db from "../../index.js"



(async ()=>{


    async function populate(qAndAObject : QandA){

        const {courseCode, question, answer} = qAndAObject

        try{
                
            await db.query(`
                INSERT INTO qandas(
                    courseCode,
                    question,
                    answer
                )
                VALUES(
                    $1, $2, $3
                )
            `, [courseCode, question, answer])
            
        }catch(err){
            console.log(err)
        }
    }


    QandAData.forEach(async (QandAObject)=>{
        const response = await populate(QandAObject)
        console.log(response)
    })


})()