import { keybindingState } from '../../state';
import { layout as base } from '../../layouts/base';

/**
 * Remove the bindend key from the list.
 *
 * @param stringKey - The key, in string, to remove
 *
 */
export const removeKey = (stringKey: string) => {
	if (!stringKey || !base.has(stringKey)) {
		throw Error('Provided key is incorrect or not supported');
	}

	const keyCode = base.get(stringKey);
	if (!keyCode) {
		throw Error('Provided key is incorrect or not supported');
	}

	if (keybindingState.bindedKeys.has(keyCode)) {
		keybindingState.bindedKeys.delete(keyCode);
	}
};
