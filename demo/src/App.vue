<script setup lang="ts">
import { onMounted } from "vue";

import { initKeybind } from "keybind";

onMounted(() => {
	const { add } = initKeybind(document.body);
	add("sns", () => {});
});
</script>

<template>
	<button id="test">Bottone</button>
</template>
