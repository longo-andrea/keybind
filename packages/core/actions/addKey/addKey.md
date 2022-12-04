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
