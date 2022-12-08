import { defineConfig } from "vitepress";
import corePackages from "../coreMDs.json" assert { type: "json" };

export default defineConfig({
	title: "Keybind",
	base: "/keybind/",
	description: "A Typescript library for easily binding keyboard keys",
	themeConfig: {
		logo: "./logo.svg",
		socialLinks: [
			{ icon: "github", link: "https://github.com/longo-andrea/keybind" },
		],
		sidebar: [
			{
				text: "Guide",
				items: [
					{
						text: "Introduction",
						link: "/readme_header",
					},
					{
						text: "Get started",
						link: "/readme_getting_started",
					},
				],
			},
			{
				text: "API",
				items: corePackages.items.map(pkg => ({
					text: pkg.name,
					link: pkg.path,
				})),
			},
			{
				text: "Demo",
				items: [{ text: "Live demo", link: "/demo" }],
			},
		],
	},
});
