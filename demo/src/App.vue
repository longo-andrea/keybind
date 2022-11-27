<script setup lang="ts">
import { onMounted } from "vue";
import {
	initKeybind,
	addKey,
	// removeKey,
	// clearKeys,
	// toggleBinding,
	// isBindingEnabled,
	// unbindListeners,
	// isKeyBinded,
} from "keybind";
import { layout as base } from "keybind-layout";

onMounted(() => {
	// Bind the library on the entire body
	initKeybind(document.body);

	// Let's bind all the keys
	base.forEach((key, value) => {
		addKey(
			value,
			{
				keyupCallback: () => console.log(`Keyup key: ${key}`),
				keydownCallback: () => console.log(`Keydown key: ${key}`),
			},
			{ preventRepeatOnKeyDown: true }
		);
	});
});
</script>

<template>
	<button id="test">Bottone</button>
</template>
