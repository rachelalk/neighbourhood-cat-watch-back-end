import pg from "pg";

import { query } from "../index.js";

async function truncateCatsTable() {
	const res = await query(`TRUNCATE TABLE cats;`);
	console.log(await res.command);
}

truncateCatsTable();
