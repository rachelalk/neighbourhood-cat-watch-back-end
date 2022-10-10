import { query } from "../db/index.js";

export async function getAllCats() {
	const result = await query(`SELECT * FROM cats;`);
	return result.rows;
}


