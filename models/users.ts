import { User, APIres, UpdateColumn } from "../types";
import db from "../db/index.js";

export async function getAllUsers(): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(`
            SELECT * FROM users
        `);

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function getUserByID(userID: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
            SELECT * FROM users
            WHERE userID = $1
            
        `,
    [userID]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function createNewUser(body: User): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const { name, userID } = body;

  const response = await db.query(
    `
    INSERT INTO users(userID, name)
    VALUES ($1, $2)
   
    `,
    [userID, name]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function replaceUserByID(
  userID: string,
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
      UPDATE users 
      SET ${column} = $1
      WHERE userID = $2
       
        `,
      [ newData, userID]
    );
  }

  const response = await Promise.all(
    updateColumnArray.map(async columnSelection => {
      return await updateEachValue(columnSelection);
    })
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = [];

  return apiResponse;
}

export async function deleteUserByID(userID: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
    DELETE FROM users
    WHERE userID = $1
    `,
    [userID]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}
