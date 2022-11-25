<script setup lang="ts">
import { onMounted } from "vue";

import { initKeybind } from "keybind";

onMounted(() => {
	const { add } = initKeybind(document.body);
	add("S", () => {});
});
</script>

<template>
	<button id="test">Bottone</button>
</template>
