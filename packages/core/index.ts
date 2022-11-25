import { layout as base } from "./layouts/base";

export function initKeybind(target: HTMLElement) {
	const bindedKeys: Map<string, () => void> = new Map();
	let bindingEnabled = true;

	target.addEventListener("keyup", e => {
		if (bindingEnabled && e.code === "KeyS") {
			console.log("hello", bindedKeys);
		}
	});

	/**
	 * Add a key-callback pair to the binded keys.
	 * @param stringKey
	 * @param callback
	 */
	const addKey = (stringKey: string, callback: () => void) => {
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

		bindedKeys.set(keyCode, callback);
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
		bindingEnabled = true;
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
