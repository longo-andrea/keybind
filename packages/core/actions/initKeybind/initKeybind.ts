import { _keyupHandler } from '../utils/keyUpHandler';
import { _keydownHandler } from '../utils/keyDownHandler';

/**
 * Init keybind library in a given target.
 *
 * @param target - The element we want to bind the keys.
 *
 */
export function initKeybind(target: HTMLElement) {
	target.addEventListener('keyup', _keyupHandler);
	target.addEventListener('keydown', _keydownHandler);
}
