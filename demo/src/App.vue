<script setup lang="ts">
import { onMounted } from "vue";

import { initKeybind, addKey } from "keybind";

onMounted(() => {
	initKeybind(document.body);
	addKey(
		"S",
		{
			keyupCallback: () => {
				console.log("Hello from S");
			},
			keydownCallback: () => {
				console.log("Hello from keydown S");
			},
		},
		{ preventRepeatOnKeyDown: true }
	);
});
</script>

<template>
	<button id="test">Bottone</button>
</template>
