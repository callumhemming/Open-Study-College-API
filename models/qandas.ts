import { QandA, APIres, UpdateColumn } from "../types";
import db from "../db/index.js";

export async function getAllQandAs(): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(`
            SELECT * FROM qandas
        `);

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function getQandAsByID(qAndAID: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
            SELECT * FROM qandas
            WHERE qandaid = $1
            
        `,
    [qAndAID]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function createNewQandA(body: QandA): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const { courseCode, question, answer } = body;

  const response = await db.query(
    `
    INSERT INTO qandas(answer, coursecode,question)
    VALUES ($1, $2, $3)
   
    `,
    [answer, courseCode, question]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function replaceQandAByID( qAndAID: string,updateColumnArray: UpdateColumn[]): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  async function updateEachValue(columnSelection: UpdateColumn) {
    const { column, newData } = columnSelection;
    return db.query(
      `
      UPDATE qandas 
      SET ${column} = $1
      WHERE userID = $2
       
        `,
      [newData, qAndAID]
    );
  }

  const response = await Promise.all(
    updateColumnArray.map(async columnSelection => {
      return updateEachValue(columnSelection);
    })
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response;

  return apiResponse;
}

export async function deleteQandAByID(qAndAID: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
    DELETE FROM qandas
    WHERE qandaid = $1
    `,
    [qAndAID]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}
