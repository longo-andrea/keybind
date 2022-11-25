import { layout as base } from "./layouts/base";

interface KeyBindingCallbacks {
	keyupCallback: () => void;
	keydownCallback?: () => void;
}

export function initKeybind(target: HTMLElement) {
	const bindedKeys: Map<string, KeyBindingCallbacks> = new Map();
	let bindingEnabled = true;

	// Here we are going to init keyup and keydown listeners
	target.addEventListener("keyup", e => {
		if (!bindingEnabled || !bindedKeys.has(e.code)) {
			return;
		}

		const bindedKey = bindedKeys.get(e.code);
		bindedKey?.keyupCallback();
	});
	target.addEventListener("keydown", e => {
		if (!bindingEnabled || !bindedKeys.has(e.code)) {
			return;
		}

		const bindedKey = bindedKeys.get(e.code);
		if (bindedKey && bindedKey.keydownCallback) {
			bindedKey?.keydownCallback();
		}
	});

	/**
	 * Add a key-callback pair to the binded keys.
	 * @param stringKey
	 * @param callbacks
	 */
	const addKey = (stringKey: string, callbacks: KeyBindingCallbacks) => {
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

		bindedKeys.set(keyCode, callbacks);
	};

	const removeKey = (stringKey: string) => {
		if (bindedKeys.has(stringKey)) {
			bindedKeys.delete(stringKey);
		}
	};

	const clearKeys = () => {
		bindedKeys.clear();
	};

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

	const enableBinding = () => {
		bindingEnabled = true;
	};

	const disableBinding = () => {
		bindingEnabled = false;
	};

	return {
		add: addKey,
		remove: removeKey,
		clear: clearKeys,
		isBindend: isKeyBinded,
		enable: enableBinding,
		disable: disableBinding,
	};
}
