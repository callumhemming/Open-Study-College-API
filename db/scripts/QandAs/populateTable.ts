import { QandAData } from "./dummyData.js";
import {QandA} from "../../../types"
import db from "../../index.js"



(async ()=>{


    async function populate(qAndAObject : QandA){

        const {courseId, question, answer} = qAndAObject

        await db.query(`
            INSERT INTO qandas(
                courseCode,
                question,
                answer
            )
            VALUES(
                $1, $2, $3
            )
        `, [courseId, question, answer])
        
    }


    QandAData.forEach(async (QandAObject)=>{
        await populate(QandAObject)
    })


})