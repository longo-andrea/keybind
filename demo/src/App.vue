<script setup lang="ts">
import { onMounted } from "vue";

import keyboardJS from "keyboardjs";

onMounted(() => {
	keyboardJS.bind(
		"a",
		e => {
			console.log("a is pressed");
		},
		e => {
			console.log("a is released");
		},
		true
	);
});
</script>

<template>
	<button id="test">Bottone</button>
</template>
