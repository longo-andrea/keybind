import { KeyBindingCallbackMap } from '../types';

export const keybindingState = {
	bindedKeys: new Map<string, KeyBindingCallbackMap>(),
	bindingEnabled: true,
};
