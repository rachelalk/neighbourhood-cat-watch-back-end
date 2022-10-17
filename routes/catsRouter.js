import express, {Router} from "express";
import cors from "cors";
import {query} from "../db/index.js"
import {getAllCats} from "../models/catsModels.js"
const catsRouter = express.Router(cors());


catsRouter.get("/", async function (req, res) {
	const result = await getAllCats();
	res.json({
		success: true,
		message: "displaying all cats",
		payload: result,
	});
});

export default catsRouter;
