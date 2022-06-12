import express from "express";
const router = express.Router();

import { APIres, QandA } from "../types";

import {
  getAllQandAs,
  getQandAsByID,
  createNewQandA,
  replaceQandAByID,
  deleteQandAByID,
} from "../models/qandas.js";


//CRUD
//Create
//Read
//Update
//Delete

router.get("/", async (req, res) => {
  const allQandAsData: APIres = await getAllQandAs();

  if (allQandAsData.success === false) {
    res.status(500).json(allQandAsData);
  }

  res.json(allQandAsData);
});

router.get("/:id", async (req, res) => {
  const qandaDataByID: APIres = await getQandAsByID(Number(req.params.id));

  if (qandaDataByID.success === false) {
    res.status(500).json(qandaDataByID);
  }

  res.json(qandaDataByID);
});

router.post("/", async (req, res) => {
  const  { body  }  = req;

  const responseCreateData: APIres = await createNewQandA(body);

  if (responseCreateData.success === false) {
    res.status(500).json(responseCreateData);
  }

  res.json(responseCreateData);
});

//Update
router.put("/:id", async (req, res) => {
  const { body } = req;

  const updateResponse: APIres = await replaceQandAByID(
    req.params.id,
    body.changeList
  );

  if (updateResponse.success === false) {
    res.status(500).json(updateResponse);
  }

  res.json(updateResponse);
});

//Delete
router.delete("/:id", async (req, res) => {
  const { body } = req;

  const deleteResponseByID: APIres = await deleteQandAByID(
    req.params.id
  );

  if (deleteResponseByID.success === false) {
    res.status(500).json(deleteResponseByID);
  }

  res.json(deleteResponseByID);
});

export default router;
