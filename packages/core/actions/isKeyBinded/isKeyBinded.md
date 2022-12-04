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
