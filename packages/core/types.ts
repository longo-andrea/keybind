export interface KeyBindingCallbackMap {
	callbacks: KeyBindingCallbacks;
	options?: KeyBindingOptions;
}

export interface KeyBindingCallbacks {
	keyupCallback?: (e?: KeyboardEvent) => void;
	keydownCallback: (e?: KeyboardEvent) => void;
}

export interface KeyBindingOptions {
	preventRepeatOnKeyDown?: boolean;
}
