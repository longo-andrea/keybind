import base from "./layouts/base";

export function initKeybind(target: HTMLElement) {
	const bindedKeys: Map<string, () => void> = new Map();
	let bindingEnabled = true;

	target.addEventListener("keyup", e => {
		if (bindingEnabled && e.code === "KeyS") {
			console.log("hello", bindedKeys);
		}
	});

	const addKey = (stringKey: string, callback: () => void) => {
		if (!stringKey || !base[stringKey.toUpperCase()]) {
			throw Error("Provided key is incorrect or no supported");
		}

		const keyCode = base[stringKey.toUpperCase()];
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
		enable: enableBinding,
		disable: disableBinding,
	};
}
