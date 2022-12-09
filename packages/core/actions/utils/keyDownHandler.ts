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

	// If the user request a combo to enable, we need to check if the combo key is pressed
	if (bindedKey && bindedKey.options && bindedKey.options.enableWithCombo) {
		const requiredCombo = bindedKey.options.enableWithCombo;

		if (requiredCombo === "Meta" && !e.metaKey) {
			return;
		}
		if (requiredCombo === "Ctrl" && !e.ctrlKey) {
			return;
		}
		if (requiredCombo === "Shift" && !e.shiftKey) {
			return;
		}
		if (requiredCombo === "Alt" && !e.altKey) {
			return;
		}
	}

	// Otherwise invoke the callback
	if (bindedKey && bindedKey.callbacks.keydownCallback) {
		bindedKey.callbacks.keydownCallback(e);
	}
};
