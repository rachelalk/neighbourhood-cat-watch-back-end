import express from "express";
const catsRouter = express.Router();
import { getAllCats } from "../models/catsModels.js"

/* GET cats listing. */
// catsRouter.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });

catsRouter.get("/", async function (req, res) {
	const result = await getAllCats();
	res.json({
		success: true,
		message: "displaying all cats",
		payload: result,
	});
});

export default catsRouter;
