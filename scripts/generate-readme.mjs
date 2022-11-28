import * as fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { FilesManager } from "turbodepot-node";

// Replicate __dirname and __filename behavior
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getTSDOCFiles = async function () {
	const interfacesDirectory = path.join(__dirname, "../api/interfaces");
	const modulesDirectory = path.join(__dirname, "../api/modules");

	const interfacesFiles = await fs.readdir(interfacesDirectory);
	const modulesFiles = await fs.readdir(modulesDirectory);

	return [
		...modulesFiles.map(file => path.join(__dirname, `../api/modules/${file}`)),
		...interfacesFiles.map(file =>
			path.join(__dirname, `../api/interfaces/${file}`)
		),
	];
};

// Collect all the files required ti build up the readme
const tsDocFiles = await getTSDOCFiles();
const headerFiles = [
	path.join(__dirname, "./assets/readme_header.md"),
	path.join(__dirname, "./assets/readme_getting_started.md"),
];
const footerFiles = [path.join(__dirname, "./assets/readme_license.md")];

// Merge all the files into README.md
const filesManager = new FilesManager();
filesManager.mergeFiles(
	[...headerFiles, ...tsDocFiles, ...footerFiles],
	"./README.md"
);
