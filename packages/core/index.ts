import { layout as base } from "./layouts/base";

import {
	KeyBindingCallbackMap,
	KeyBindingCallbacks,
	KeyBindingOptions,
} from "./types";

const bindedKeys: Map<string, KeyBindingCallbackMap> = new Map();
let bindingEnabled = true;

const _keyupHandler = (e: KeyboardEvent) => {
	if (!bindingEnabled || !bindedKeys.has(e.code)) {
		return;
	}

	const bindedKey = bindedKeys.get(e.code);
	if (bindedKey && bindedKey.callbacks.keyupCallback) {
		bindedKey.callbacks?.keyupCallback();
	}
};

const _keydownHandler = (e: KeyboardEvent) => {
	if (!bindingEnabled || !bindedKeys.has(e.code)) {
		return;
	}

	const bindedKey = bindedKeys.get(e.code);

	// If the user request to prevent repeat, and we are in a repeat event
	// then, we prevent to invoke the callback
	if (
		bindedKey &&
		bindedKey.options &&
		bindedKey.options.preventRepeatOnKeyDown &&
		e.repeat
	) {
		return;
	}

	// Otherwise invoke the callback
	if (bindedKey && bindedKey.callbacks.keydownCallback) {
		bindedKey.callbacks.keydownCallback();
	}
};

/**
 * Init keybind library in a given target.
 *
 * @param target - The element we want to bind the keys.
 *
 */
export function initKeybind(target: HTMLElement) {
	target.addEventListener("keyup", _keyupHandler);
	target.addEventListener("keydown", _keydownHandler);
}

/**
 * Add a key-callback pair to the binded keys.
 *
 * @param stringKey - The key, in string, we want to bind.
 * @param callbacks - The callbacks for keyup/keydown events.
 * @param options - Eventual options for the key.
 *
 */
export const addKey = (
	stringKey: string,
	callbacks: KeyBindingCallbacks,
	options: KeyBindingOptions = { preventRepeatOnKeyDown: false }
) => {
	if (!stringKey || !base.has(stringKey)) {
		throw Error("Provided key is incorrect or not supported");
	}

	const keyCode = base.get(stringKey);
	if (!keyCode) {
		throw Error("Provided key is incorrect or not supported");
	}

	if (bindedKeys.has(keyCode)) {
		throw Error(
			"Provided key has already been initialized. Please explicitly remove it."
		);
	}

	bindedKeys.set(keyCode, { callbacks, options });
};

/**
 * Remove the bindend key from the list.
 *
 * @param stringKey - The key, in string, to remove
 *
 */
export const removeKey = (stringKey: string) => {
	if (!stringKey || !base.has(stringKey)) {
		throw Error("Provided key is incorrect or not supported");
	}

	const keyCode = base.get(stringKey);
	if (!keyCode) {
		throw Error("Provided key is incorrect or not supported");
	}

	if (bindedKeys.has(keyCode)) {
		bindedKeys.delete(keyCode);
	}
};

/**
 * Remove all the bindend keys from the list.
 *
 */
export const clearKeys = () => {
	bindedKeys.clear();
};

/**
 * Returns whether the key is binded or not.
 *
 * @param stringKey - The key, in string, we want to look for.
 * @returns Whether the key is binded or not.
 *
 */
export const isKeyBinded = (stringKey: string) => {
	if (!stringKey || !base.has(stringKey)) {
		throw Error("Provided key is incorrect or not supported");
	}

	const keyCode = base.get(stringKey);
	if (!keyCode) {
		throw Error("Provided key is incorrect or not supported");
	}
	return bindedKeys.has(keyCode);
};

/**
 * Toggle bind state.
 *
 * @param enable - The new state of binding.
 *
 */
export const toggleBinding = (enable: boolean) => {
	bindingEnabled = enable;
};

/**
 * Returns whether the binding is enabled or not.
 *
 * @returns Whether the binding is enabled or not.
 *
 */
export const isBindingEnabled = () => {
	return bindingEnabled;
};

/**
 * Unbinds listeners.
 *
 * @param target - The target we want to unbid.
 *
 */
export const unbindListeners = (target: HTMLElement) => {
	target.removeEventListener("keyup", _keyupHandler);
	target.removeEventListener("keydown", _keydownHandler);
};
