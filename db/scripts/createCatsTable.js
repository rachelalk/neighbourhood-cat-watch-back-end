import pg from "pg";

import { query } from "../index.js";

async function createCatsTable() {
    const res = await query(
			`CREATE TABLE IF NOT EXISTS cats (cat_id VARCHAR(50), lat VARCHAR(100), long VARCHAR(100), friendliness INT, cuteness INT, comment TEXT, photo_url VARCHAR(200), still_there INT, not_there INT);`
		);
    console.log(await res.command)
}

createCatsTable();