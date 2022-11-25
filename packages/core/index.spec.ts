import { initKeybind } from "./index";

jest.mock("./layouts/base");

describe("InitKeyBind", () => {
	describe("addKey", () => {
		it("should throw error if incorrect key is provided", () => {
			const { add } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				add("fake-key", () => {
					console.log("Added fake key");
				});
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if invalid key is provided", () => {
			const { add } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				add("M", () => {
					console.log("Added a key not supported");
				});
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if a key has already been added", () => {
			const { add, isBindend } = initKeybind(window.document.body);

			// add a key
			add("a", () => {
				console.log("Added binding for letter A");
			});

			// Check if the key has been added
			expect(isBindend("a")).toBeTruthy();

			// Try the to add the same key again
			expect(() => {
				add("a", () => {
					console.log("Added a key not supported");
				});
			}).toThrow(
				"Provided key has already been initialized. Please explicitly remove it."
			);
		});

		it("should add a key", () => {
			const { add, isBindend } = initKeybind(window.document.body);

			// add a key
			add("a", () => {
				console.log("Added binding for letter A");
			});

			// Check if the key has been added
			expect(isBindend("a")).toBeTruthy();
		});
	});
});