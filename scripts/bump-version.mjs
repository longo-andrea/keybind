import glob from "glob";
import * as fs from "node:fs/promises";
import process from "process";

// // Replicate __dirname and __filename behavior
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const bumpAllPackages = async function (version) {
	// Bump root pacakge
	const rootPakcageJSON = await fs.readFile("package.json");
	const newRootPackageJSON = JSON.stringify(
		{
			...JSON.parse(rootPakcageJSON),
			version,
		},
		null,
		4
	);
	await fs.writeFile("package.json", newRootPackageJSON);

	// Look for packages and bump
	await glob(
		"packages/core/**/package.json",
		{ ignore: "packages/core/node_modules/**/package.json" },
		async (error, files) => {
			if (error) {
				throw new Error("Error during packages search.");
			}

			for (const file of files) {
				const packageJSON = await fs.readFile(file);
				const newPackageJSON = JSON.stringify(
					{
						...JSON.parse(packageJSON),
						version,
					},
					null,
					4
				);
				await fs.writeFile(file, newPackageJSON);
			}
		}
	);
};

const getVersion = args => {
	const versionIndex = args.indexOf("--version");
	if (versionIndex > -1) {
		return process.argv[versionIndex + 1];
	}

	return null;
};

const version = getVersion(process.argv);
if (!version) {
	throw new Error("You must provide a value for --version argument");
}

bumpAllPackages(version);
