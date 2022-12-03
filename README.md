<h1 align="center">KeyBind</h1>

<div align=center>
    <img src="./assets/logo.svg" alt="KeybindJS logo" />
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
# Module: index

## Functions

### addKey

▸ **addKey**(`stringKey`, `callbacks`, `options?`): `void`

Add a key-callback pair to the binded keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stringKey` | `string` | The key, in string, we want to bind. |
| `callbacks` | [`KeyBindingCallbacks`](../interfaces/types.KeyBindingCallbacks.md) | The callbacks for keyup/keydown events. |
| `options` | [`KeyBindingOptions`](../interfaces/types.KeyBindingOptions.md) | Eventual options for the key. |

#### Returns

`void`

#### Defined in

[index.ts:66](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L66)

___

### clearKeys

▸ **clearKeys**(): `void`

Remove all the bindend keys from the list.

#### Returns

`void`

#### Defined in

[index.ts:114](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L114)

___

### initKeybind

▸ **initKeybind**(`target`): `void`

Init keybind library in a given target.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | The element we want to bind the keys. |

#### Returns

`void`

#### Defined in

[index.ts:53](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L53)

___

### isBindingEnabled

▸ **isBindingEnabled**(): `boolean`

Returns whether the binding is enabled or not.

#### Returns

`boolean`

Whether the binding is enabled or not.

#### Defined in

[index.ts:153](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L153)

___

### isKeyBinded

▸ **isKeyBinded**(`stringKey`): `boolean`

Returns whether the key is binded or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stringKey` | `string` | The key, in string, we want to look for. |

#### Returns

`boolean`

Whether the key is binded or not.

#### Defined in

[index.ts:125](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L125)

___

### removeKey

▸ **removeKey**(`stringKey`): `void`

Remove the bindend key from the list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stringKey` | `string` | The key, in string, to remove |

#### Returns

`void`

#### Defined in

[index.ts:95](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L95)

___

### toggleBinding

▸ **toggleBinding**(`enable`): `void`

Toggle bind state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | The new state of binding. |

#### Returns

`void`

#### Defined in

[index.ts:143](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L143)

___

### unbindListeners

▸ **unbindListeners**(`target`): `void`

Unbinds listeners.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `HTMLElement` | The target we want to unbid. |

#### Returns

`void`

#### Defined in

[index.ts:163](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/index.ts#L163)
# Module: types

## Interfaces

- [KeyBindingCallbackMap](../interfaces/types.KeyBindingCallbackMap.md)
- [KeyBindingCallbacks](../interfaces/types.KeyBindingCallbacks.md)
- [KeyBindingOptions](../interfaces/types.KeyBindingOptions.md)
# Interface: KeyBindingCallbackMap

[types](../modules/types.md).KeyBindingCallbackMap

## Properties

### callbacks

• **callbacks**: [`KeyBindingCallbacks`](types.KeyBindingCallbacks.md)

#### Defined in

[types.ts:2](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/types.ts#L2)

___

### options

• `Optional` **options**: [`KeyBindingOptions`](types.KeyBindingOptions.md)

#### Defined in

[types.ts:3](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/types.ts#L3)
# Interface: KeyBindingCallbacks

[types](../modules/types.md).KeyBindingCallbacks

## Properties

### keydownCallback

• **keydownCallback**: (`e?`: `KeyboardEvent`) => `void`

#### Type declaration

▸ (`e?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `KeyboardEvent` |

##### Returns

`void`

#### Defined in

[types.ts:8](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/types.ts#L8)

___

### keyupCallback

• `Optional` **keyupCallback**: (`e?`: `KeyboardEvent`) => `void`

#### Type declaration

▸ (`e?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `KeyboardEvent` |

##### Returns

`void`

#### Defined in

[types.ts:7](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/types.ts#L7)
# Interface: KeyBindingOptions

[types](../modules/types.md).KeyBindingOptions

## Properties

### preventRepeatOnKeyDown

• `Optional` **preventRepeatOnKeyDown**: `boolean`

#### Defined in

[types.ts:12](https://github.com/longo-andrea/keybind/blob/c509801/packages/core/types.ts#L12)
# Licence

MIT License © 2022 [Andrea Longo](https://github.com/longo-andrea)
