import { initKeybind, addKey, unbindListeners } from "../../index";

jest.mock("../../layouts/base");

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
