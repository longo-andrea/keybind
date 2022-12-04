export default {
	title: "Keybind",
	description: "A Typescript library for easily binding keyboard keys",
	themeConfig: {
		logo: "../assets/logo.svg",
		sidebar: [
			{
				text: "Introduction",
				items: [
					{ text: "About", link: "/index" },
					{ text: "Getting Started", link: "/getting-started" },
				],
			},
			{
				text: "API",
				items: [
					{ text: "Modules", link: "api/modules/index" },
					{
						text: "KeyBindingCallbackMap",
						link: "api/interfaces/types.KeyBindingCallbackMap",
					},
					{
						text: "KeyBindingCallbacks",
						link: "api/interfaces/types.KeyBindingCallbacks",
					},
					{
						text: "KeyBindingOptions",
						link: "api/interfaces/types.KeyBindingOptions",
					},
				],
			},
		],
	},
};
