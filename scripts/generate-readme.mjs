import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { FilesManager } from "turbodepot-node";
import { getCoreMDFiles } from "./utils.mjs";
import { execSync } from "child_process";

// Replicate __dirname and __filename behavior
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Collect all the files required ti build up the readme
const mdFiles = await getCoreMDFiles();
const headerFiles = [
	path.join(__dirname, "./assets/readme_header.md"),
	path.join(__dirname, "./assets/readme_getting_started.md"),
];
const footerFiles = [
	path.join(__dirname, "./assets/readme_demo.md"),
	path.join(__dirname, "./assets/readme_license.md"),
];

// Merge all the files into README.md
const filesManager = new FilesManager();
filesManager.mergeFiles(
	[...headerFiles, ...mdFiles, ...footerFiles],
	"./README.md"
);

// Copy README in packages/core
await fs.copy("./README.md", "./packages/core/README.md");
