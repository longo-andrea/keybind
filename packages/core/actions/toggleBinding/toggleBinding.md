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
