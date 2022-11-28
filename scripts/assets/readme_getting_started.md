# Install

Install the package with your favourite package manager. For example:

```
npm i keybind
```

# Usage

Start using Keybind is pretty simple:

```
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
