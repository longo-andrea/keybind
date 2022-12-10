import { _keyupHandler } from '../utils/keyUpHandler';
import { _keydownHandler } from '../utils/keyDownHandler';

/**
 * Unbinds listeners.
 *
 * @param target - The target we want to unbid.
 *
 */
export const unbindListeners = (target: HTMLElement) => {
	target.removeEventListener('keyup', _keyupHandler);
	target.removeEventListener('keydown', _keydownHandler);
};
