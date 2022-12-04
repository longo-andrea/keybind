import { initKeybind, isKeyBinded, addKey, clearKeys } from "../../index";

jest.mock("../../layouts/base");

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
