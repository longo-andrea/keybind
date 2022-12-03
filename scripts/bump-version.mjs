import glob from "glob";
import * as fs from "node:fs/promises";
import process from "process";
import { execSync } from "child_process";

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

// Retrieve version from arguments
const version = getVersion(process.argv);
if (!version) {
	throw new Error("You must provide a value for --version argument");
}

// Bump all packages
bumpAllPackages(version);

// Stage and commit
execSync("git add .", { stdio: "inherit" });
execSync(`git commit -m "chore: release version: ${version}"`, {
	stdio: "inherit",
});
