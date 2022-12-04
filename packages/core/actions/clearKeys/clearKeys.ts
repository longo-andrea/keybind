import { keybindingState } from "../../state";

/**
 * Remove all the bindend keys from the list.
 *
 */
export const clearKeys = () => {
	keybindingState.bindedKeys.clear();
};
