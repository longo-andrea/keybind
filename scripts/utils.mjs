import * as fs from "node:fs/promises";
import exists from "fs.promises.exists";
import { fileURLToPath } from "url";
import path from "path";

// Replicate __dirname and __filename behavior
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getCoreMDFiles = async function () {
	const actionsDirectory = path.join(__dirname, "../packages/core/actions");
	const actionsFiles = await fs.readdir(actionsDirectory);
	const files = [];

	for (const dir of actionsFiles) {
		const filePath = path.join(
			__dirname,
			`../packages/core/actions/${dir}/${dir}.md`
		);
		if (await exists(filePath)) {
			files.push(filePath);
		}
	}

	files.push(path.join(__dirname, "../packages/core/types.md"));

	return files;
};
