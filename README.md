<h1 align="center">KeyBind</h1>

<div align=center>
    <img src="https://raw.githubusercontent.com/longo-andrea/keybind/main/assets/logo.svg" alt="KeybindJS logo" />
    <h2>A Typescript library for easily binding keyboard keys</h2>
</div>

---

KeyBind is a library written in Typescripts, that aim to provide an easy way to bind keyboard keys and create amazing and interactive web applications.

- 😷 Type safety with Typescript
- 📋 IDE integration with Typedoc
- ✨ Framework agnostic
# Install

Install the package with your favourite package manager. For example:

```ts
npm i keybind
```

# Usage

Start using Keybind is pretty simple:

```ts
import { initKeybind, addKey } from "keybind";

// Init KeyBind library in document.body
initKeybind(document.body);

// Then we can add all the biding we want
addKey(
	"S",
	{
		keyupCallback: () => {
			console.log("Hello from keyup S");
		},
		keydownCallback: () => {
			console.log("Hello from keydown S");
		},
	},
	{ preventRepeatOnKeyDown: true }
);
```

For a live demo take a look to the [demo folder](https://github.com/longo-andrea/keybind/tree/main/demo)

# API
# AddKey

Add a new key to the binding list. Let you specify which key should be binded, keyup and keydown callback, and eventually some options.

## Parameters

| Name      | Type                | Mandatory | Default                             |
| --------- | ------------------- | --------- | ----------------------------------- |
| stringKey | string              | true      | -                                   |
| callbacks | KeyBindingCallbacks | true      | -                                   |
| options   | KeyBindingOptions   | false     | `{ preventRepeatOnKeyDown: false }` |

## Returns

void

## Usage

```ts
import { addKey } from "keybind";

// Init KeyBind and do some stuff ...

// Then we can add all the biding we want
addKey(
	"S",
	{
		keyupCallback: () => {
			console.log("Hello from keyup S");
		},
		keydownCallback: () => {
			console.log("Hello from keydown S");
		},
	},
	{ preventRepeatOnKeyDown: true }
);
```
# ClearKeys

Remove all the bindend keys from the list.

## Parameters

No parameters required.

## Returns

void

## Usage

```ts
import { clearKeys } from "keybind";

// Init KeyBind and do some stuff ...

// Then we can add all the biding we want
clearKeys();
```
# InitKeybind

Init keybind library in a given target.

## Parameters

| Name   | Type        | Mandatory | Default |
| ------ | ----------- | --------- | ------- |
| target | HTMLElement | true      | -       |

## Returns

void

## Usage

```ts
import { initKeybind } from "keybind";

initKeybind(document.body);
```
# IsBindingEnabled

Returns whether the binding is enabled or not.

## Parameters

No parameters required

## Returns

`boolean` - whether the binding is enabled

## Usage

```ts
import { isBindingEnabled } from "keybind";

// Init KeyBind and do some stuff ...

// Then we can add all the biding we want
if (isBindingEnabled()) {
	console.log("Bindining enabled");
} else {
	console.log("Bindining disabled");
}
```
# IsKeyBinded

Returns whether a given key is binded or not.

## Parameters

| Name      | Type   | Mandatory | Default |
| --------- | ------ | --------- | ------- |
| stringKey | string | true      | -       |

## Returns

`boolean` - returns whether the given key is binded

## Usage

```ts
import { isKeyBinded } from "keybind";

// Init KeyBind and do some stuff ...

if (isKeyBinded("S")) {
	console.log("S is binded");
} else {
	console.log("S isn't binded");
}
```
# RemoveKey

Remove the given key (if binded) from the binding list.

## Parameters

| Name      | Type   | Mandatory | Default |
| --------- | ------ | --------- | ------- |
| stringKey | string | true      | -       |

## Returns

void

## Usage

```ts
import { removeKey } from "keybind";

// Init KeyBind and do some stuff ...

// Then we can add remove the biding we want
removeKey("S");
```
# ToggleBinding

Allows to enable/disable binding.

## Parameters

| Name   | Type    | Mandatory | Default |
| ------ | ------- | --------- | ------- |
| enable | boolean | true      | -       |

## Returns

void

## Usage

```ts
import { toggleBinding } from "keybind";

// Init KeyBind and do some stuff ...

// Let's turn off binding
toggleBinding(false);

// ... and then turn on again
toggleBinding(true);
```
# UnbindListeners

Unbind Keybind library.

## Parameters

| Name   | Type        | Mandatory | Default |
| ------ | ----------- | --------- | ------- |
| target | HTMLElement | true      | -       |

## Returns

void

## Usage

```ts
import { unbindListeners } from "keybind";

// Init KeyBind and do some stuff ...

unbindListeners(document.body);
```
# Types

## KeyBindingCallbackMap

Represents the key binded by the library.

### Properties

| Name      | Type                | Mandatory |
| --------- | ------------------- | --------- |
| callbacks | KeyBindingCallbacks | true      |
| options   | KeyBindingOptions   | false     |

## KeyBindingCallbacks

Represents the callbacks binded by the library.

### Properties

| Name            | Type                        | Mandatory |
| --------------- | --------------------------- | --------- |
| keyupCallback   | (e?: KeyboardEvent) => void | false     |
| keydownCallback | (e?: KeyboardEvent) => void | true      |

## KeyBindingOptions

Represent the available options for binding.

### Properties

| Name                   | Type    | Mandatory |
| ---------------------- | ------- | --------- |
| preventRepeatOnKeyDown | boolean | false     |
# Demo

You can try a live demo of Keybind here: https://csjgt3.csb.app/

The full code of the demo is available here: https://github.com/longo-andrea/keybind/tree/main/demo
# Licence

MIT License © 2022 [Andrea Longo](https://github.com/longo-andrea)
