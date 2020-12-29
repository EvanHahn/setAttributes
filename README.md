# setAttributes

Set and delete multiple attributes in a DOM element.

This...

```javascript
const el = document.querySelector("input");

el.setAttribute("type", "password");
el.setAttribute("name", "password-field");
el.removeAttribute("maxlength");
```

...is equivalent to this:

```javascript
const setAttributes = require("setattributes");

const el = document.querySelector("input");

setAttributes(el, {
  type: "password",
  name: "password-field",
  maxlength: null,
});
```

## Installation

```sh
npm install setattributes
```

On top of files where you want to use `setAttributes()`:

```js
import setAttributes from "setattributes";
```
