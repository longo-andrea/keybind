import {
	initKeybind,
	isBindingEnabled,
	clearKeys,
	unbindListeners,
	toggleBinding,
} from '../../index';

jest.mock('../../layouts/base');

describe('toggleBinding', () => {
	beforeEach(() => {
		jest.resetAllMocks();

		// Reset the module state
		clearKeys();
		unbindListeners(window.document.body);
		toggleBinding(true);
	});

	describe('enable & isEnabled', () => {
		it('should enable bindings', () => {
			initKeybind(window.document.body);

			// Enable bindings
			toggleBinding(true);

			// Check if binding is enabled
			expect(isBindingEnabled()).toBeTruthy();
		});
	});

	describe('disable & isEnabled', () => {
		it('should disable bindings', () => {
			initKeybind(window.document.body);

			// Disable bindings
			toggleBinding(false);

			// Check if binding is enabled
			expect(isBindingEnabled()).toBeFalsy();
		});
	});
});
