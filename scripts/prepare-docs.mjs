import fs from "fs-extra";
import { getCoreMDFiles } from "./utils.mjs";

const copyDefaultMDs = async () => {
	const genericMDs = [
		"readme_header",
		"readme_getting_started",
		"readme_license",
	];

	for (const fileName of genericMDs) {
		await fs.copy(
			`./scripts/assets/${fileName}.md`,
			`./packages/${fileName}.md`
		);
	}

	// Also copy the logo
	await fs.copy("./scripts/assets/logo.svg", "./packages/logo.svg");
};

const createCorePackagesLinks = async () => {
	const files = await getCoreMDFiles();
	const relativeFilePath = files.map(file => {
		const path = file.match(/(?<=actions\/).*$/);

		if (path) {
			return {
				name: path[0].match(/((?<=\/).*$)(.*?)/)[0].match(/[^.]+/)[0],
				path: `core/actions/${path[0]}`,
			};
		} else {
			const typePath = file.match(/(?<=core\/).*$/)[0].match(/[^.]+/)[0];
			return {
				name: typePath,
				path: `core/${typePath}`,
			};
		}
	});

	await fs.writeJson("./packages/coreMDs.json", { items: relativeFilePath });
};

await copyDefaultMDs();
await createCorePackagesLinks();
