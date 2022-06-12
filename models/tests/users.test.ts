import jest from "jest";
import request from "supertest";

const baseUrl = "http://localhost:3000/";

describe("Testing Users endpoints", () => {
  it("Should return a 200 status code when GET /users", async () => {
    const response = await request(baseUrl).get("users");

    expect(response.statusCode).toBe(200);
  });

  it("Should return a 200 status code when GET /users/rgerg4444444", async () => {
    const response = await request(baseUrl).get("users/rgerg4444444");

    expect(response.statusCode).toBe(200);
  });

  it("Should return a 200 status code when POST /users", async () => {
    const expectedResponseObject = {
      success: true,
      payload: [],
    };

    const response = await request(baseUrl)
        .post("users")
        .send({
            userID:"testingid",
            name:"Test name"
        });

    expect(response.statusCode).toBe(200);

    expect(response.body).toMatchObject(expectedResponseObject)
  });

  it("Should return a 200 status code when PUT /carts/testingid", async () => {
    const expectedResponseObject = {
      success: true,
      payload: [],
    };

    const response = await request(baseUrl)
        .put("users/testingid")
        .send({
            changeList:[{column:"name", newData:"TESTING NAME BUT BIG"}, ]
        });

    expect(response.statusCode).toBe(200);

    expect(response.body).toMatchObject(expectedResponseObject)
  });


  it("Should return a 200 status code when DELETE /users/testingid", async () => {
    const expectedResponseObject = {
      success: true,
      payload: [],
    };

    const response = await request(baseUrl)
        .delete("users/testingid")

    expect(response.statusCode).toBe(200);

    expect(response.body).toMatchObject(expectedResponseObject)
  });
});
