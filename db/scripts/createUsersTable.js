import pg from "pg";

import { query } from "../index.js";

async function createCatsTable() {
    const res = await query(
			`CREATE TABLE IF NOT EXISTS cats (cat_id VARCHAR(50), friendliness INT, cuteness INT, comment TEXT);`
		);
    console.log(await res.command)
}

createCatsTable();