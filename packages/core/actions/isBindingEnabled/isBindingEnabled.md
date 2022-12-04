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
