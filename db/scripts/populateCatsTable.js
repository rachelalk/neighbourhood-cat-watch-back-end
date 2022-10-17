import { query } from "../index.js";

import { catsData } from "../../libs/data.js";

const cats = catsData;

async function populateCatsTable() {
	for (let i = 0; i < cats.length; i++) {
		const res = await query(
			`INSERT INTO cats (cat_id, lat, long, friendliness, cuteness, comment, photo_url, still_there, not_there) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
			[
				cats[i].id,
				cats[i].lat,
				cats[i].long,
				cats[i].friendliness,
				cats[i].cuteness,
				cats[i].comment,
				cats[i].photo_url,
				cats[i].still_there,
				cats[i].not_there,
			]
		);
		console.log(res.command);
	}
}

populateCatsTable();
