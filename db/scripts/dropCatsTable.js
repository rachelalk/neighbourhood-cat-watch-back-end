import pg from "pg";

import { query } from "../index.js";

async function dropCatsTable() {
	const res = await query(
		`DROP TABLE cats;`
	);
	console.log(await res.command);
}

dropCatsTable();
