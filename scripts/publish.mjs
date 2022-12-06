import path from "path";
import { execSync } from "child_process";

execSync("pnpm build", { stdio: "inherit" });
execSync("npm publish --access public", {
	stdio: "inherit",
	cwd: path.join("packages", "core", "dist"),
});
