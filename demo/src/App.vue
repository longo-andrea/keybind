<script setup lang="ts">
import { onMounted } from "vue";

import { initKeybind } from "keybind";

onMounted(() => {
	const { add } = initKeybind(document.body);
	add(
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
