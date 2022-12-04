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
