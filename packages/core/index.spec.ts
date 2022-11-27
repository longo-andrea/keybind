import {
	initKeybind,
	addKey,
	removeKey,
	clearKeys,
	toggleBinding,
	isBindingEnabled,
	unbindListeners,
	isKeyBinded,
} from "./index";

jest.mock("./layouts/base");

describe("InitKeyBind", () => {
	beforeEach(() => {
		jest.resetAllMocks();

		// Reset the module state
		clearKeys();
		unbindListeners(window.document.body);
		toggleBinding(true);
	});

	describe("keyup", () => {
		it("should trigger defined events", () => {
			initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			const keyNCallback = jest.fn();

			// Add some keys
			addKey("B", {
				keydownCallback: jest.fn(),
				keyupCallback: keyBCallback,
			});
			addKey("N", {
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
			initKeybind(window.document.body);
			const keyCCallback = jest.fn();

			// Add some keys
			addKey("C", {
				keydownCallback: keyCCallback,
			});
			toggleBinding(false);

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
			initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			const keyNCallback = jest.fn();

			// Add some keys
			addKey("B", {
				keydownCallback: keyBCallback,
			});
			addKey("N", {
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
			initKeybind(window.document.body);
			const keyCCallback = jest.fn();

			// Add some keys
			addKey("C", {
				keyupCallback: jest.fn(),
				keydownCallback: keyCCallback,
			});
			toggleBinding(false);

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
			initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			// Add some keys
			addKey(
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
			initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				addKey("fake-key", {
					keydownCallback: () => {
						console.log("Added fake key");
					},
				});
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if invalid key is provided", () => {
			initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				addKey("M", {
					keydownCallback: () => {
						console.log("Added a key not supported");
					},
				});
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if a key has already been added", () => {
			initKeybind(window.document.body);

			// add a key
			addKey("A", {
				keydownCallback: () => {
					console.log("Added binding for letter A");
				},
			});

			// Check if the key has been added
			expect(isKeyBinded("A")).toBeTruthy();

			// Try the to add the same key again
			expect(() => {
				addKey("A", {
					keydownCallback: () => {
						console.log("Added a key not supported");
					},
				});
			}).toThrow(
				"Provided key has already been initialized. Please explicitly remove it."
			);
		});

		it("should add a key with both keyup and keydown events", () => {
			initKeybind(window.document.body);

			// add a key
			addKey("A", {
				keyupCallback: () => {
					console.log("Added binding for letter A");
				},
				keydownCallback: () => {
					console.log("Added binding for keydown letter A");
				},
			});

			// Check if the key has been added
			expect(isKeyBinded("A")).toBeTruthy();
		});
	});

	describe("removeKey", () => {
		it("should throw error if incorrect key is provided", () => {
			initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				removeKey("fake-key");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if invalid key is provided", () => {
			initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				removeKey("M");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should remove a key if exists", () => {
			initKeybind(window.document.body);

			// Add a key
			addKey("A", {
				keydownCallback: () => {
					console.log("Added binding for letter A");
				},
			});
			expect(isKeyBinded("A")).toBeTruthy();

			// Remove the key
			removeKey("A");

			// Check if the key has been removed
			expect(isKeyBinded("A")).toBeFalsy();
		});
	});

	describe("clearKeys", () => {
		it("should clear all keys", () => {
			initKeybind(window.document.body);
			const keyBCallback = jest.fn();
			const keyNCallback = jest.fn();

			// Add some keys
			addKey("B", {
				keydownCallback: keyBCallback,
			});
			addKey("N", {
				keydownCallback: keyNCallback,
			});
			expect(isKeyBinded("B")).toBeTruthy();
			expect(isKeyBinded("N")).toBeTruthy();

			// Clear all binded keys
			clearKeys();

			// Check if the keys have been cleared
			expect(isKeyBinded("B")).toBeFalsy();
			expect(isKeyBinded("N")).toBeFalsy();
		});
	});

	describe("isKeyBinded", () => {
		it("should throw error if incorrect key is provided", () => {
			initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				isKeyBinded("fake-key");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should throw error if invalid key is provided", () => {
			initKeybind(window.document.body);

			// add a fake key
			expect(() => {
				isKeyBinded("M");
			}).toThrow("Provided key is incorrect or not supported");
		});

		it("should return if a key is present in the binded keys", () => {
			initKeybind(window.document.body);

			// add a key
			addKey("A", {
				keydownCallback: () => {
					console.log("Added binding for letter A");
				},
			});

			// Check if the key has been added
			expect(isKeyBinded("A")).toBeTruthy();
		});
	});

	describe("enable & isEnabled", () => {
		it("should enable bindings", () => {
			initKeybind(window.document.body);

			// Enable bindings
			toggleBinding(true);

			// Check if binding is enabled
			expect(isBindingEnabled()).toBeTruthy();
		});
	});

	describe("disable & isEnabled", () => {
		it("should disable bindings", () => {
			initKeybind(window.document.body);

			// Disable bindings
			toggleBinding(false);

			// Check if binding is enabled
			expect(isBindingEnabled()).toBeFalsy();
		});
	});

	describe("unbindListeners", () => {
		it("should unbind listeners", () => {
			initKeybind(window.document.body);
			const keyupNCallback = jest.fn();
			const keydownNCallback = jest.fn();

			// Add a key binding
			addKey("N", {
				keyupCallback: keyupNCallback,
				keydownCallback: keydownNCallback,
			});

			// Unbind listeners
			unbindListeners(window.document.body);

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
