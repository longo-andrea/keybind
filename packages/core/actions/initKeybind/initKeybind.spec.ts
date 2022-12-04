import {
	initKeybind,
	addKey,
	clearKeys,
	unbindListeners,
	toggleBinding,
} from "../../index";

jest.mock("../../layouts/base");

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
});
