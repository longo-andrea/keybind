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

					setTimeout(() => {
						keyEvent.button = "";
						keyEvent.type = "";
					}, 500);
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
	<div class="instructions-container">
		<h1>Welcome in <span>Keybind</span> demo</h1>
		<h2>A Typescript library for easily binding keyboard keys</h2>

		<p>Press any key!</p>
	</div>

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
	font-family: Arial, Helvetica, sans-serif;
	background-color: #98e8ff47;
}

.instructions-container {
	height: 400px;
	width: 400px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: #2a2a2a;
	box-shadow: 1px 1px 8px #282829;
	border-radius: 40px;

	text-align: center;
}

.instructions-container h1 {
	font-size: 38px;
	margin-bottom: 0;
	color: #dadada;
}

.instructions-container h1 span {
	display: block;
	background: linear-gradient(
		145deg,
		rgba(152, 232, 255, 1),
		rgba(102, 51, 153, 1)
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.instructions-container h2 {
	color: #dadada;
	font-size: 20px;
	font-weight: 300;
	margin-top: 0;
}

.instructions-container > p {
	align-self: center;
	padding: 5px;
	width: 150px;
	border-radius: 40px;
	display: inline;
	background-color: #ffffff;
	color: #2a2a2a;
	box-shadow: 5px 6px #98e8ff;
}

.key-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: linear-gradient(
		145deg,
		rgba(152, 232, 255, 0.45),
		rgba(102, 51, 153, 0.45)
	);
	height: 150px;
	padding: 25px;
	display: inline-flex;
	align-items: center;
	justify-content: start;
	border-radius: 26px;

	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(19px);
	-webkit-backdrop-filter: blur(19px);
	border-radius: 10px;
}

.key-container__wrapper {
	padding: 5px 15px;
	font-family: Arial, Helvetica, sans-serif;
	border: 2px solid #000000;
	box-shadow: 4px 4px #000000;
	font-size: 46px;
	display: inline-block;
	font-weight: 600;
	letter-spacing: 0.05em;
	white-space: nowrap;
	background-color: #dedede;
}

.key-container__type {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 38px;
	color: #dadada;
	margin-left: 50px;
	font-weight: 500;

	text-transform: uppercase;
}
</style>
