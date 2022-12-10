import { keybindingState } from '../../state';

/**
 * Returns whether the binding is enabled or not.
 *
 * @returns Whether the binding is enabled or not.
 *
 */
export const isBindingEnabled = () => {
	return keybindingState.bindingEnabled;
};
