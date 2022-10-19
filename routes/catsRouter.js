import express, { Router } from "express";
import cors from "cors";
import { query } from "../db/index.js";
import { getAllCats, addNewCat, stillThere, deleteCat } from "../models/catsModels.js";
import bodyParser from "body-parser";
const jsonParser = bodyParser.json();
const catsRouter = express.Router(cors(), jsonParser);

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

catsRouter.patch("/:id", async function (req, res) {
	const id = req.params.id;
	const updatedData = req.body;
	const result = await stillThere(id, updatedData);
	res.json({ success: true, payload: result });
});

catsRouter.delete("/:id", async function (req, res) {
	const id = req.params.id;
	const result = await deleteCat(id);
	res.json({ success: true, payload: result });
});

export default catsRouter;
