import { keybindingState } from "../../state";

/**
 * Toggle bind state.
 *
 * @param enable - The new state of binding.
 *
 */
export const toggleBinding = (enable: boolean) => {
	keybindingState.bindingEnabled = enable;
};
