setAttributes
=============

Set and delete multiple attributes in a DOM element.

This...

```javascript
var el = document.querySelector('input')

el.setAttribute('type', 'password')
el.setAttribute('name', 'password-field')
el.removeAttribute('maxlength')
```

...is equivalent to this:

```javascript
var setAttributes = require('setattributes')

var el = document.querySelector('input')

setAttributes(el, {
  type: 'password',
  name: 'password-field',
  maxlength: null
})
```
