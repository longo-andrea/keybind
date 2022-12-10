import {
	initKeybind,
	isKeyBinded,
	addKey,
	clearKeys,
	unbindListeners,
	toggleBinding,
} from '../../index';

jest.mock('../../layouts/base');

describe('addKey', () => {
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
			addKey('fake-key', {
				keydownCallback: () => {
					console.log('Added fake key');
				},
			});
		}).toThrow('Provided key is incorrect or not supported');
	});

	it('should throw error if invalid key is provided', () => {
		initKeybind(window.document.body);

		// add a fake key
		expect(() => {
			addKey('M', {
				keydownCallback: () => {
					console.log('Added a key not supported');
				},
			});
		}).toThrow('Provided key is incorrect or not supported');
	});

	it('should throw error if a key has already been added', () => {
		initKeybind(window.document.body);

		// add a key
		addKey('A', {
			keydownCallback: () => {
				console.log('Added binding for letter A');
			},
		});

		// Check if the key has been added
		expect(isKeyBinded('A')).toBeTruthy();

		// Try the to add the same key again
		expect(() => {
			addKey('A', {
				keydownCallback: () => {
					console.log('Added a key not supported');
				},
			});
		}).toThrow(
			'Provided key has already been initialized. Please explicitly remove it.',
		);
	});

	it('should add a key with both keyup and keydown events', () => {
		initKeybind(window.document.body);

		// add a key
		addKey('A', {
			keyupCallback: () => {
				console.log('Added binding for letter A');
			},
			keydownCallback: () => {
				console.log('Added binding for keydown letter A');
			},
		});

		// Check if the key has been added
		expect(isKeyBinded('A')).toBeTruthy();
	});
});
