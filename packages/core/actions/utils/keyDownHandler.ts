import { keybindingState } from "../../state";

export const _keydownHandler = (e: KeyboardEvent) => {
	if (
		!keybindingState.bindingEnabled ||
		!keybindingState.bindedKeys.has(e.code)
	) {
		return;
	}

	const bindedKey = keybindingState.bindedKeys.get(e.code);

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
		bindedKey.callbacks.keydownCallback(e);
	}
};
