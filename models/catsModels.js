import { query } from "../db/index.js";

export async function getAllCats() {
	const result = await query(`SELECT * FROM cats;`);
	return result.rows;
}

export async function addNewCat(newCat) {
	const {
		cat_id,
		lat,
		long,
		friendliness,
		cuteness,
		comment,
		photo_url,
		still_there,
		not_there,
	} = newCat;

	const data = await query(
		`INSERT INTO cats (cat_id, lat, long, friendliness, cuteness, comment, photo_url, still_there, not_there) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
		[
			cat_id,
			lat,
			long,
			friendliness,
			cuteness,
			comment,
			photo_url,
			still_there,
			not_there,
		]
	);
	return data.rows;
}

export async function stillThere(id, updatedData) {
	const { still_there, not_there } = updatedData;
	const data = await query(
		`UPDATE cats SET still_there = $1, not_there = $2 WHERE cat_id = $3 RETURNING *;`,
		[Number(still_there), Number(not_there), id]
	);
	return data.rows;
}

export async function deleteCat(id) {
	console.log("delete");
	const data = await query(`DELETE FROM cats WHERE cat_id = $1 RETURNING *`, [
		id,
	]);
	return data.rows;
}
