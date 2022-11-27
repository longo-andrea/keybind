<script setup lang="ts">
import { onMounted, reactive, onBeforeUnmount } from "vue";
import { initKeybind, addKey, unbindListeners } from "keybind";
import { layout as base } from "keybind-layout";

const keyEvent = reactive({ button: "", type: "" });

onMounted(() => {
	// Bind the library on the entire body
	initKeybind(document.body);

	// Let's bind all the keys
	base.forEach((key, value) => {
		addKey(
			value,
			{
				keyupCallback: () => {
					keyEvent.button = value;
					keyEvent.type = "Released";
				},
				keydownCallback: () => {
					keyEvent.button = value;
					keyEvent.type = "Pressed";
				},
			},
			{ preventRepeatOnKeyDown: true }
		);
	});
});

onBeforeUnmount(() => {
	unbindListeners(window.document.body);
});
</script>

<template>
	<div class="key-container" v-if="keyEvent.button !== ''">
		<span class="key-container__wrapper">
			{{ keyEvent.button }}
		</span>

		<span class="key-container__type">{{ keyEvent.type }} </span>
	</div>
</template>

<style>
* {
	box-sizing: border-box;
}

body {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}

.key-container {
	background: rgba(13, 222, 96, 0.7);
	height: 150px;
	padding: 25px;
	display: inline-flex;
	align-items: center;
	justify-content: start;
	border-radius: 26px;
}

.key-container__wrapper {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 68px;
	color: #282829;
	padding: 10px 20px;
	border: 8px solid #282829;
	border-radius: 26px;
	background: white;
}

.key-container__type {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 68px;
	color: #282829;
	margin-left: 50px;
}
</style>
