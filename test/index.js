const setAttributes = require("..");

const assert = require("assert");

describe("setAttributes", function () {
  beforeEach(function () {
    this.el = {
      attributes: {},
      setAttribute: function (name, value) {
        this.attributes[name] = value;
      },
      removeAttribute: function (name) {
        delete this.attributes[name];
      },
    };
  });

  it("can accept an empty object", function () {
    setAttributes(this.el, {});
    assert.deepEqual(this.el.attributes, {});
  });

  it("can accept an object with one property", function () {
    setAttributes(this.el, { foo: 123 });
    assert.deepEqual(this.el.attributes, { foo: 123 });
  });

  it("can accept an object with many properties", function () {
    setAttributes(this.el, {
      foo: 123,
      bar: 456,
    });
    assert.deepEqual(this.el.attributes, {
      foo: 123,
      bar: 456,
    });
  });

  it("ignores attributes that are undefined", function () {
    setAttributes(this.el, {
      foo: 123,
      bar: undefined,
    });
    assert.deepEqual(this.el.attributes, { foo: 123 });
  });

  it("ignores attributes that are null", function () {
    setAttributes(this.el, {
      foo: 123,
      bar: null,
    });
    assert.deepEqual(this.el.attributes, { foo: 123 });
  });

  it("deletes attributes that are undefined", function () {
    setAttributes(this.el, {
      foo: 123,
      bar: 456,
    });
    setAttributes(this.el, { bar: undefined });
    assert.deepEqual(this.el.attributes, { foo: 123 });
  });

  it("deletes attributes that are null", function () {
    setAttributes(this.el, {
      foo: 123,
      bar: 456,
    });
    setAttributes(this.el, { bar: null });
    assert.deepEqual(this.el.attributes, { foo: 123 });
  });
});
