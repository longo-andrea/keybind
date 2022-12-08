import { execSync } from "child_process";
import prependFile from "prepend-file";

// execSync("pnpm generate-changelog", { stdio: "inherit" });

const getLastTagDate = tag => {
	const listCommand = execSync(`git log --pretty='%cs' ${tag}`);
	return listCommand.toString().trim().split("\n")[0];
};

const getLastTags = () => {
	const tagsCommand = execSync("git tag --sort=-version:refname | head -n 2");
	const tags = tagsCommand.toString().trim().split("\n");

	return tags;
};

const getCommitListBetweenTags = (tagA, tagB) => {
	const listCommand = execSync(
		`git log --pretty='@%an|%cs|%s' ${tagA}...${tagB}`
	);
	const commits = listCommand.toString().trim().split("\n");
	return commits.map(commit => {
		const splittedCommit = commit.split("|");
		return {
			author: splittedCommit[0],
			date: splittedCommit[1],
			message: splittedCommit[2],
		};
	});
};

const divideCommitsByTye = commits => {
	const commitsByType = {
		build: [],
		chore: [],
		ci: [],
		docs: [],
		feat: [],
		fix: [],
		perf: [],
		refactor: [],
		revert: [],
		style: [],
		test: [],
	};

	// Split commit by type
	commits.forEach(commit => {
		const commitType = commit.message.split(":")[0];
		if (commitsByType[commitType]) {
			commitsByType[commitType].push(commit);
		}
	});

	return commitsByType;
};

const buildChangelogMessage = (title, commits) => {
	let message = "";
	message += `\n\n## ${title} \n\n`;
	commits.forEach(commit => {
		message += `- <${commit.author}> (${commit.date}) - ${
			commit.message.split(":")[1]
		}\n`;
	});

	return message;
};

const generateMD = () => {
	let MD = "";
	const lastTwoTags = getLastTags();
	const commitsList = getCommitListBetweenTags(lastTwoTags[0], lastTwoTags[1]);
	const commitsByType = divideCommitsByTye(commitsList);

	MD += `# ${lastTwoTags[0]} - ${getLastTagDate(lastTwoTags[0])}`;

	if (commitsByType.build.length) {
		MD += buildChangelogMessage("Build system", commitsByType.build);
	}

	if (commitsByType.chore.length) {
		MD += buildChangelogMessage("Dependencies", commitsByType.chore);
	}

	if (commitsByType.ci.length) {
		MD += buildChangelogMessage("Continuous integration", commitsByType.ci);
	}

	if (commitsByType.docs.length) {
		MD += buildChangelogMessage("Documentation", commitsByType.docs);
	}

	if (commitsByType.feat.length) {
		MD += buildChangelogMessage("Features", commitsByType.feat);
	}

	if (commitsByType.fix.length) {
		MD += buildChangelogMessage("Bug fix", commitsByType.fix);
	}

	if (commitsByType.perf.length) {
		MD += buildChangelogMessage("Performance improvements", commitsByType.perf);
	}

	if (commitsByType.refactor.length) {
		MD += buildChangelogMessage("Refactor", commitsByType.refactor);
	}

	if (commitsByType.revert.length) {
		MD += buildChangelogMessage("Revert", commitsByType.revert);
	}

	if (commitsByType.style.length) {
		MD += buildChangelogMessage("Style", commitsByType.style);
	}

	if (commitsByType.test.length) {
		MD += buildChangelogMessage("Tests", commitsByType.test);
	}

	return MD;
};

(async () => {
	const changelog = generateMD();
	await prependFile("CHANGELOG.md", changelog);
})();
