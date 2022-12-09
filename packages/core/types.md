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

## KeyComboOption

Represent the combo options. Available formats are:

`Meta, Ctrl, Shift, Alt`

## KeyBindingOptions

Represent the available options for binding.

### Properties

| Name                   | Type           | Mandatory |
| ---------------------- | -------------- | --------- |
| preventRepeatOnKeyDown | boolean        | false     |
| enableWithCombo        | KeyComboOption | false     |
