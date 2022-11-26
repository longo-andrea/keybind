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
				keydownCallback: jest.fn(),
				keyupCallback: keyBCallback,
			});
			add("N", {
				keydownCallback: jest.fn(),
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
				keydownCallback: keyBCallback,
			});
			add("N", {
				keydownCallback: keyNCallback,
			});

			// Trigger B keyup event
			const event = new KeyboardEvent("keydown", { code: "KeyB" });
			const anotherEvent = new KeyboardEvent("keydown", { code: "KeyN" });
			window.document.body.dispatchEvent(event);
			window.document.body.dispatchEvent(anotherEvent);

			// Expect callback to have been called
			expect(keyBCallback).toHaveBeenCalled();
			expect(keyNCallback).toHaveBeenCalled();
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

		it("should not trigger multiple events if user request to preventRepeat", () => {
			const { add } = initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			// Add some keys
			add(
				"B",
				{
					keyupCallback: jest.fn(),
					keydownCallback: keyBCallback,
				},
				{ preventRepeatOnKeyDown: true }
			);
			// Trigger B keyup event
			const event = new KeyboardEvent("keydown", { code: "KeyB" });
			window.document.body.dispatchEvent(event);
			expect(keyBCallback).toHaveBeenCalled();

			// Trigger a keydown event repeat
			Object.defineProperty(event, "repeat", { get: () => true });
			window.document.body.dispatchEvent(event);
			expect(keyBCallback).toHaveBeenCalledTimes(1);
		});
	});

	describe("addKey", () => {
		it("should throw error if incorrect key is provided", () => {
			const { add } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				add("fake-key", {
					keydownCallback: () => {
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
					keydownCallback: () => {
						console.log("Added a key not supported");
					},
				});
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if a key has already been added", () => {
			const { add, isBindend } = initKeybind(window.document.body);

			// add a key
			add("a", {
				keydownCallback: () => {
					console.log("Added binding for letter A");
				},
			});

			// Check if the key has been added
			expect(isBindend("a")).toBeTruthy();

			// Try the to add the same key again
			expect(() => {
				add("a", {
					keydownCallback: () => {
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
				keydownCallback: () => {
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

	describe("clearKeys", () => {
		it("should clear all keys", () => {
			const { add, clear, isBindend } = initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			const keyNCallback = jest.fn();

			// Add some keys
			add("B", {
				keydownCallback: keyBCallback,
			});
			add("N", {
				keydownCallback: keyNCallback,
			});
			expect(isBindend("B")).toBeTruthy();
			expect(isBindend("N")).toBeTruthy();

			// Clear all binded keys
			clear();

			// Check if the keys have been cleared
			expect(isBindend("B")).toBeFalsy();
			expect(isBindend("N")).toBeFalsy();
		});
	});

	describe("isKeyBinded", () => {
		it("should throw error if incorrect key is provided", () => {
			const { isBindend } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				isBindend("fake-key");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if invalid key is provided", () => {
			const { isBindend } = initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				isBindend("M");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should return if a key is present in the binded keys", () => {
			const { add, isBindend } = initKeybind(window.document.body);

			// add a key
			add("a", {
				keydownCallback: () => {
					console.log("Added binding for letter A");
				},
			});

			// Check if the key has been added
			expect(isBindend("a")).toBeTruthy();
		});
	});

	describe("enable & isEnabled", () => {
		it("should enable bindings", () => {
			const { enable, isEnabled } = initKeybind(window.document.body);

			// Enable bindings
			enable();

			// Check if binding is enabled
			expect(isEnabled()).toBeTruthy();
		});
	});

	describe("disable & isEnabled", () => {
		it("should disable bindings", () => {
			const { disable, isEnabled } = initKeybind(window.document.body);

			// Disable bindings
			disable();

			// Check if binding is enabled
			expect(isEnabled()).toBeFalsy();
		});
	});

	describe("unbindListeners", () => {
		it("should unbind listeners", () => {
			const { add, unbind } = initKeybind(window.document.body);
			const keyupNCallback = jest.fn();
			const keydownNCallback = jest.fn();

			// Add a key binding
			add("N", {
				keyupCallback: keyupNCallback,
				keydownCallback: keydownNCallback,
			});

			// Unbind listeners
			unbind();

			// Trigger B keyup and keydown events
			const eventKeyup = new KeyboardEvent("keyup", { code: "KeyB" });
			const eventKeydown = new KeyboardEvent("keydown", { code: "KeyB" });
			window.document.body.dispatchEvent(eventKeyup);
			window.document.body.dispatchEvent(eventKeydown);

			// Check if binding is enabled
			expect(keyupNCallback).not.toHaveBeenCalled();
			expect(keydownNCallback).not.toHaveBeenCalled();
		});
	});
});
