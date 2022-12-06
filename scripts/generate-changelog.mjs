import { execSync } from "child_process";

execSync("pnpm generate-changelog", { stdio: "inherit" });

// Stage, commit and push
execSync("git add .", { stdio: "inherit" });
execSync("git commit -m 'docs: update CHANGELOG.md'", { stdio: "inherit" });
execSync("git push origin main", { stdio: "inherit" });
