import * as fs from "node:fs/promises";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// Replicate __dirname and __filename behavior
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publishAllPackages = async function () {
	const packages = await fs.readdir(path.join(__dirname, "../packages"));
	for (const pkg of packages) {
		execSync("npm publish --access public", {
			stdio: "inherit",
			cwd: path.join("packages", pkg, "dist"),
		});
	}
};

execSync("pnpm build", { stdio: "inherit" });
await publishAllPackages();
