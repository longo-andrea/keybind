import { initKeybind } from "./index";

jest.mock("./layouts/base");

describe("InitKeyBind", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	describe("keyup", () => {
		it("should trigger defined events", () => {
			const { add } = initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			const keyNCallback = jest.fn();

			// Add some keys
			add("B", {
				keyupCallback: keyBCallback,
			});
			add("N", {
				keyupCallback: keyNCallback,
			});

			// Trigger B keyup event
			const event = new KeyboardEvent("keyup", { code: "KeyB" });
			window.document.body.dispatchEvent(event);

			// Expect console to have
			expect(keyBCallback).toHaveBeenCalled();
			expect(keyBCallback).toHaveBeenCalled();
		});

		it("should not trigger defined event if binding is disabled", () => {
			const { add, disable } = initKeybind(window.document.body);
			const keyCCallback = jest.fn();

			// Add some keys
			add("C", {
				keyupCallback: keyCCallback,
			});
			disable();

			// Trigger C keyup event
			const event = new KeyboardEvent("keyup", { code: "KeyC" });
			window.document.body.dispatchEvent(event);

			// Expect console to have
			expect(keyCCallback).not.toHaveBeenCalled();
		});

		it("should not trigger event if key has not been binded", () => {
			initKeybind(window.document.body);
			const keyDCallback = jest.fn();

			// Trigger C keyup event
			const event = new KeyboardEvent("keyup", { code: "KeyC" });
			window.document.body.dispatchEvent(event);

			// Expect console to have
			expect(keyDCallback).not.toHaveBeenCalled();
		});
	});

	describe("keydown", () => {
		it("should trigger defined events", () => {
			const { add } = initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			const keyNCallback = jest.fn();

			// Add some keys
			add("B", {
				keyupCallback: jest.fn(),
				keydownCallback: keyBCallback,
			});
			add("N", {
				keyupCallback: jest.fn(),
				keydownCallback: keyNCallback,
			});

			// Trigger B keyup event
			const event = new KeyboardEvent("keydown", { code: "KeyB" });
			window.document.body.dispatchEvent(event);

			// Expect console to have
			expect(keyBCallback).toHaveBeenCalled();
			expect(keyBCallback).toHaveBeenCalled();
		});

		it("should not trigger defined event if binding is disabled", () => {
			const { add, disable } = initKeybind(window.document.body);
			const keyCCallback = jest.fn();

			// Add some keys
			add("C", {
				keyupCallback: jest.fn(),
				keydownCallback: keyCCallback,
			});
			disable();

			// Trigger C keyup event
			const event = new KeyboardEvent("keydown", { code: "KeyC" });
			window.document.body.dispatchEvent(event);

			// Expect console to have
			expect(keyCCallback).not.toHaveBeenCalled();
		});

		it("should not trigger event if key has not been binded", () => {
			initKeybind(window.document.body);
			const keyDCallback = jest.fn();

			// Trigger C keyup event
			const event = new KeyboardEvent("keydown", { code: "KeyC" });
			window.document.body.dispatchEvent(event);

			// Expect console to have
			expect(keyDCallback).not.toHaveBeenCalled();
		});
	});

	describe("addKey", () => {
		it("should throw error if incorrect key is provided", () => {
			const { add } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				add("fake-key", {
					keyupCallback: () => {
						console.log("Added fake key");
					},
				});
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if invalid key is provided", () => {
			const { add } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				add("M", {
					keyupCallback: () => {
						console.log("Added a key not supported");
					},
				});
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if a key has already been added", () => {
			const { add, isBindend } = initKeybind(window.document.body);

			// add a key
			add("a", {
				keyupCallback: () => {
					console.log("Added binding for letter A");
				},
			});

			// Check if the key has been added
			expect(isBindend("a")).toBeTruthy();

			// Try the to add the same key again
			expect(() => {
				add("a", {
					keyupCallback: () => {
						console.log("Added a key not supported");
					},
				});
			}).toThrow(
				"Provided key has already been initialized. Please explicitly remove it."
			);
		});

		it("should add a key with both keyup and keydown events", () => {
			const { add, isBindend } = initKeybind(window.document.body);

			// add a key
			add("a", {
				keyupCallback: () => {
					console.log("Added binding for letter A");
				},
				keydownCallback: () => {
					console.log("Added binding for keydown letter A");
				},
			});

			// Check if the key has been added
			expect(isBindend("a")).toBeTruthy();
		});
	});

	describe("removeKey", () => {
		it("should throw error if incorrect key is provided", () => {
			const { remove } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				remove("fake-key");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if invalid key is provided", () => {
			const { remove } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				remove("M");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should remove a key if exists", () => {
			const { add, remove, isBindend } = initKeybind(window.document.body);

			// Add a key
			add("a", {
				keyupCallback: () => {
					console.log("Added binding for letter A");
				},
			});
			expect(isBindend("a")).toBeTruthy();

			// Remove the key
			remove("a");

			// Check if the key has been removed
			expect(isBindend("a")).toBeFalsy();
		});
	});
});
