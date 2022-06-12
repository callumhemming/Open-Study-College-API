import { CartItem, APIres, UpdateColumn } from "../types";
import db from "../db/index.js";

export async function getAllCartItems(): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(`
            SELECT * FROM cartItems
        `);

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function getCartItemsByUserID(userID: string): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
            SELECT * FROM cartItems
            WHERE userID = $1
            
        `,
    [userID]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function createNewCartItem(body: CartItem): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const { userID, cost, courseSelected } = body;

  const response = await db.query(
    `
    INSERT INTO cartItems(userID, courseSelected, cost)
    VALUES ($1, $2, $3)
   
    `,
    [userID, courseSelected, cost]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}

export async function replaceCartItemByID(cartItemUniqueID: number, updateColumnArray: UpdateColumn[] ): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  async function updateEachValue(columnSelection: UpdateColumn) {
    const { column, newData } = columnSelection;
    return db.query(
      `
      UPDATE cartItems
      SET ${column} = $1
      WHERE userID = $2
       
        `,
      [newData, cartItemUniqueID]
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

export async function deleteCartItemByID(cartItemUniqueID: number): Promise<APIres> {
  const apiResponse: APIres = {
    success: false,
    payload: [],
  };

  const response = await db.query(
    `
    DELETE FROM carts
    WHERE cartItemID = $1
    `,
    [cartItemUniqueID]
  );

  //Check is response is valid

  apiResponse.success = true;
  apiResponse.payload = response.rows;

  return apiResponse;
}