import { Cart, APIres, UpdateColumn } from "../types";
import db from "../db/index.js";

export async function getAllCarts(): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(`
            SELECT * FROM courses
        `);

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function getCartByID(userID: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
            SELECT * FROM courses
            WHERE courseCode = $1
            
        `,
    [courseCode]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function createNewCart(body: Cart): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const { courseCode, name, tag, atAGlance, overview, extraInfo, examDetails } =
    body;

  const response = await db.query(
    `
    INSERT INTO courses(courseCode, name, tag, atAGlance, overview, extraInfo, examDetails)
    VALUES ($1, $2, $3, $4, $5, $6,$7)
   
    `,
    [courseCode, name, tag, atAGlance, overview, extraInfo, examDetails]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function replaceCartByID(
  courseCode: string,
  updateColumnArray: UpdateColumn[]
): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  async function updateEachValue(columnSelection: UpdateColumn) {
    const { column, newData } = columnSelection;
    return db.query(
      `
        UPDATE courses 
        SET $1 = $2
        WHERE courseCode = $3
       
        `,
      [column, newData, courseCode]
    );
  }

  const response = await Promise.all(
    updateColumnArray.map(async columnSelection => {
      return await updateEachValue(columnSelection);
    })
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response;

  return apiResponse;
}

export async function deleteCartByID(userID: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
    DELETE FROM courses
    WHERE courseCode = $1
    `,
    [courseCode]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}