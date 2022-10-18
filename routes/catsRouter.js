import express, { Router } from "express";
import cors from "cors";
import { query } from "../db/index.js";
import { getAllCats, addNewCat, stillThere } from "../models/catsModels.js";
const catsRouter = express.Router(cors());

catsRouter.get("/", async function (req, res) {
	const result = await getAllCats();
	res.json({
		success: true,
		message: "displaying all cats",
		payload: result,
	});
});

catsRouter.post("/", async function (req, res) {
	const newCat = req.body;
	const results = await addNewCat(newCat);
	res.json({
		success: true,
		message: `new cat added`,
		payload: results,
	});
});

catsRouter.patch("/id", async function (req, res) {
	const id = Number(req.params.id);
	const data = req.body;
	const result = await stillThere(id, data);
	res.json({ success: true, payload: result });
});

export default catsRouter;
