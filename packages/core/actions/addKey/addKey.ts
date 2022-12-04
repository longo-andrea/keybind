import { keybindingState } from "../../state";
import { KeyBindingCallbacks, KeyBindingOptions } from "../../types";
import { layout as base } from "../../layouts/base";

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

	if (keybindingState.bindedKeys.has(keyCode)) {
		throw Error(
			"Provided key has already been initialized. Please explicitly remove it."
		);
	}

	keybindingState.bindedKeys.set(keyCode, { callbacks, options });
};
