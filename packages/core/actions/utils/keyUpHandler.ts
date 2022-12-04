import { keybindingState } from "../../state";

export const _keyupHandler = (e: KeyboardEvent) => {
	if (
		!keybindingState.bindingEnabled ||
		!keybindingState.bindedKeys.has(e.code)
	) {
		return;
	}

	const bindedKey = keybindingState.bindedKeys.get(e.code);
	if (bindedKey && bindedKey.callbacks.keyupCallback) {
		bindedKey.callbacks?.keyupCallback(e);
	}
};
