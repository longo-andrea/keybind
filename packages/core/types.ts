export interface KeyBindingCallbackMap {
	callbacks: KeyBindingCallbacks;
	options?: KeyBindingOptions;
}

export interface KeyBindingCallbacks {
	keyupCallback?: (e?: KeyboardEvent) => void;
	keydownCallback: (e?: KeyboardEvent) => void;
}

export type KeyComboOption = "Meta" | "Ctrl" | "Shift" | "Alt";

export interface KeyBindingOptions {
	preventRepeatOnKeyDown?: boolean;
	enableWithCombo?: KeyComboOption;
}
