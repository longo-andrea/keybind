import { layout as base } from "./layouts/base";

interface KeyBindingCallbackMap {
	callbacks: KeyBindingCallbacks;
	options?: KeyBindingOptions;
}

interface KeyBindingCallbacks {
	keyupCallback?: () => void;
	keydownCallback: () => void;
}

interface KeyBindingOptions {
	preventRepeatOnKeyDown?: boolean;
}

export function initKeybind(target: HTMLElement) {
	const bindedKeys: Map<string, KeyBindingCallbackMap> = new Map();
	let bindingEnabled = true;

	// Here we are going to init keyup and keydown listeners
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
	target.addEventListener("keyup", _keyupHandler);
	target.addEventListener("keydown", _keydownHandler);

	/**
	 * Add a key-callback pair to the binded keys.
	 * @param stringKey
	 * @param callbacks
	 */
	const addKey = (
		stringKey: string,
		callbacks: KeyBindingCallbacks,
		options: KeyBindingOptions = { preventRepeatOnKeyDown: false }
	) => {
		if (!stringKey || !base.has(stringKey.toUpperCase())) {
			throw Error("Provided key is incorrect or not supported");
		}

		const keyCode = base.get(stringKey.toUpperCase());
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
	 * @param stringKey
	 */
	const removeKey = (stringKey: string) => {
		if (!stringKey || !base.has(stringKey.toUpperCase())) {
			throw Error("Provided key is incorrect or not supported");
		}

		const keyCode = base.get(stringKey.toUpperCase());
		if (!keyCode) {
			throw Error("Provided key is incorrect or not supported");
		}

		if (bindedKeys.has(keyCode)) {
			bindedKeys.delete(keyCode);
		}
	};

	/**
	 * Remove all the bindend keys from the list.
	 */
	const clearKeys = () => {
		bindedKeys.clear();
	};

	/**
	 * Returns whether the key is binded or not.
	 * @param stringKey
	 */
	const isKeyBinded = (stringKey: string) => {
		if (!stringKey || !base.has(stringKey.toUpperCase())) {
			throw Error("Provided key is incorrect or not supported");
		}

		const keyCode = base.get(stringKey.toUpperCase());
		if (!keyCode) {
			throw Error("Provided key is incorrect or not supported");
		}
		return bindedKeys.has(keyCode);
	};

	/**
	 * Enables bindings.
	 */
	const enableBinding = () => {
		bindingEnabled = true;
	};

	/**
	 * Disables bindings.
	 */
	const disableBinding = () => {
		bindingEnabled = false;
	};

	/**
	 * Returns whether the binding is enabled or not.
	 */
	const isBindingEnabled = () => {
		return bindingEnabled;
	};

	/**
	 * Unbinds listeners.
	 */
	const unbindListeners = () => {
		target.removeEventListener("keyup", _keyupHandler);
		target.removeEventListener("keydown", _keydownHandler);
	};

	return {
		add: addKey,
		remove: removeKey,
		clear: clearKeys,
		isBindend: isKeyBinded,
		enable: enableBinding,
		disable: disableBinding,
		isEnabled: isBindingEnabled,
		unbind: unbindListeners,
	};
}
