var setAttributes = require("./setattributes");

var assert = require("assert");

function makeFakeElement() {
  return {
    attributes: {},
    setAttribute: function (name, value) {
      this.attributes[name] = value;
    },
    removeAttribute: function (name) {
      delete this.attributes[name];
    },
  };
}

var el;

// Accepting an empty object
el = makeFakeElement();
setAttributes(el, {});
assert.deepEqual(el.attributes, {});

// Accepting an object with one property
el = makeFakeElement();
setAttributes(el, { foo: 123 });
assert.deepEqual(el.attributes, { foo: 123 });

// Accepting an object with many properties
el = makeFakeElement();
setAttributes(el, {
  foo: 123,
  bar: 456,
});
assert.deepEqual(el.attributes, {
  foo: 123,
  bar: 456,
});

// Ignoring undefined attributes
el = makeFakeElement();
setAttributes(el, {
  foo: 123,
  bar: undefined,
});
assert.deepEqual(el.attributes, { foo: 123 });

// Ignoring null attributes
el = makeFakeElement();
setAttributes(el, {
  foo: 123,
  bar: null,
});
assert.deepEqual(el.attributes, { foo: 123 });

// Deleting undefined attributes
el = makeFakeElement();
setAttributes(el, {
  foo: 123,
  bar: 456,
});
setAttributes(el, { bar: undefined });
assert.deepEqual(el.attributes, { foo: 123 });

// Deleting null attributes
el = makeFakeElement();
setAttributes(el, {
  foo: 123,
  bar: 456,
});
setAttributes(el, { bar: null });
assert.deepEqual(el.attributes, { foo: 123 });
