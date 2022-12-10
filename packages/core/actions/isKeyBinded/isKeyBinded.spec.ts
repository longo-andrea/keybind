import {
	initKeybind,
	isKeyBinded,
	addKey,
	clearKeys,
	unbindListeners,
	toggleBinding,
} from '../../index';

jest.mock('../../layouts/base');

describe('isKeyBinded', () => {
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
			isKeyBinded('fake-key');
		}).toThrow('Provided key is incorrect or not supported');
	});

	it('should throw error if invalid key is provided', () => {
		initKeybind(window.document.body);

		// add a fake key
		expect(() => {
			isKeyBinded('M');
		}).toThrow('Provided key is incorrect or not supported');
	});

	it('should return if a key is present in the binded keys', () => {
		initKeybind(window.document.body);

		// add a key
		addKey('A', {
			keydownCallback: () => {
				console.log('Added binding for letter A');
			},
		});

		// Check if the key has been added
		expect(isKeyBinded('A')).toBeTruthy();
	});
});
