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

export async function stillThere(id, stillThere, notThere) {
	const { cat_id } = id;
	const { still_there } = stillThere;
	const { not_there } = notThere;
	const data = await query(
		`UPDATE cats SET still_there = $1 WHERE, not_there = $2 cat_id = $3 RETURNING *;`,
		[Number(still_there), Number(not_there), Number(cat_id)]
	);
	return data.rows;
}
