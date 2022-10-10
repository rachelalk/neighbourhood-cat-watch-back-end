import { query } from "../index.js";

import { userData } from "../../libs/data.js";

const users = userData;

async function populateUsersTable() {
	for (let i = 0; i < users.length; i++) {
		const res = await query(
			`INSERT INTO users (name, surname, age) VALUES ($1, $2, $3);`,
			[
				users[i].name,
				users[i].surname,
				users[i].age,
			]
		);
		console.log(res.command);
	}
}

populateUsersTable();
