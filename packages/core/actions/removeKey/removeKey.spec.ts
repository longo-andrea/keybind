import {
	initKeybind,
	isKeyBinded,
	addKey,
	removeKey,
	clearKeys,
	unbindListeners,
	toggleBinding,
} from '../../index';

jest.mock('../../layouts/base');

describe('removeKey', () => {
	beforeEach(() => {
		jest.resetAllMocks();

		// Reset the module state
		clearKeys();
		unbindListeners(window.document.body);
		toggleBinding(true);
	});

	it('should throw error if incorrect key is provided', () => {
		initKeybind(window.document.body);

		// add a fake key
		expect(() => {
			removeKey('fake-key');
		}).toThrow('Provided key is incorrect or not supported');
	});

	it('should throw error if invalid key is provided', () => {
		initKeybind(window.document.body);

		// add a fake key
		expect(() => {
			removeKey('M');
		}).toThrow('Provided key is incorrect or not supported');
	});

	it('should remove a key if exists', () => {
		initKeybind(window.document.body);

		// Add a key
		addKey('A', {
			keydownCallback: () => {
				console.log('Added binding for letter A');
			},
		});
		expect(isKeyBinded('A')).toBeTruthy();

		// Remove the key
		removeKey('A');

		// Check if the key has been removed
		expect(isKeyBinded('A')).toBeFalsy();
	});
});
