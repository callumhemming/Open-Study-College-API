import { Cart, CartItem, APIres, UpdateColumn } from "../types";
import db from "../db/index.js";
import { getCartItemsByUserID } from "./cartItem.js";

export async function getAllCarts(): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(`
            SELECT * FROM carts
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
            SELECT * FROM carts
            WHERE userID = $1
            
        `,
    [userID]
  );

  //Check is response is valid

  //Get CartItems
  const cartItems : CartItem[] = (await getCartItemsByUserID(userID)).payload
  

  apiResponse.success = true;
  apiResponse.payload = response.rows;
  apiResponse.payload[0].cartItems = cartItems

  return apiResponse;
}

export async function createNewCart(body: Cart): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const { userID, totalCost } = body;

  const response = await db.query(
    `
    INSERT INTO carts(userID, totalCost)
    VALUES ($1, $2)
   
    `,
    [userID, totalCost]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function replaceCartByID(userID: string, updateColumnArray: UpdateColumn[] ): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  async function updateEachValue(columnSelection: UpdateColumn) {
    const { column, newData } = columnSelection;
    return db.query(
      `
        UPDATE carts 
        SET $1 = $2
        WHERE userID = $3
       
        `,
      [column, newData, userID]
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
    DELETE FROM carts
    WHERE userID = $1
    `,
    [userID]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}