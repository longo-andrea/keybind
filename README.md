<h1 align="center">KeyBind</h1>

<div align=center>
    <img src="./assets/logo.svg" alt="KeybindJS logo" />
    <h2>A Typescript library for easily binding keyboard keys</h2>
</div>

---

KeyBind is a library writte in Typescripts, that aim to provide an easy way to bind keyboard keys and create amazing and interactive web applications.

# Install

```
npm i keybind
```

# Usage

```
import { initKeybind } from "keybind";

// Init KeyBind library in document.body
const { add } = initKeybind(document.body);

// Add a callback to S letter for both keyup and keydown event
add(
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
