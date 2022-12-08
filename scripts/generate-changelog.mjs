import { execSync } from "child_process";

execSync("pnpm generate-changelog", { stdio: "inherit" });
