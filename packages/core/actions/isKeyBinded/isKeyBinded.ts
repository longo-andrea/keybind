import { keybindingState } from '../../state';
import { layout as base } from '../../layouts/base';

/**
 * Returns whether the key is binded or not.
 *
 * @param stringKey - The key, in string, we want to look for.
 * @returns Whether the key is binded or not.
 *
 */
export const isKeyBinded = (stringKey: string) => {
	if (!stringKey || !base.has(stringKey)) {
		throw Error('Provided key is incorrect or not supported');
	}

	const keyCode = base.get(stringKey);
	if (!keyCode) {
		throw Error('Provided key is incorrect or not supported');
	}
	return keybindingState.bindedKeys.has(keyCode);
};
