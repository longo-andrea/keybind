export interface KeyBindingCallbackMap {
	callbacks: KeyBindingCallbacks;
	options?: KeyBindingOptions;
}

export interface KeyBindingCallbacks {
	keyupCallback?: () => void;
	keydownCallback: () => void;
}

export interface KeyBindingOptions {
	preventRepeatOnKeyDown?: boolean;
}
