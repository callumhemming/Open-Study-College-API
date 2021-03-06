import jest from "jest";
import request from "supertest";

const baseUrl = "http://localhost:3000/";

describe("Testing Carts endpoints", () => {
  it("Should return a 200 status code when GET /carts", async () => {
    const response = await request(baseUrl).get("carts");

    expect(response.statusCode).toBe(200);
  });

  it("Should return a 200 status code when GET /carts/787733333", async () => {
    const response = await request(baseUrl).get("carts/787733333");

    expect(response.statusCode).toBe(200);
  });

  it("Should return a 200 status code when POST /carts", async () => {
    const expectedResponseObject = {
      success: true,
      payload: [],
    };

    const response = await request(baseUrl)
        .post("carts")
        .send({
            userID:"testingid",
            totalCost:30000
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
        .put("carts/testingid")
        .send({
            changeList:[{column:"totalcost", newData:10}, ]
        });

    expect(response.statusCode).toBe(200);

    expect(response.body).toMatchObject(expectedResponseObject)
  });


  it("Should return a 200 status code when DELETE /carts/testingid", async () => {
    const expectedResponseObject = {
      success: true,
      payload: [],
    };

    const response = await request(baseUrl)
        .delete("carts/testingid")

    expect(response.statusCode).toBe(200);

    expect(response.body).toMatchObject(expectedResponseObject)
  });
});
