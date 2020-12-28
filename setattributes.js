module.exports = function setAttributes(element, attributes) {
  var value;

  for (var key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      value = attributes[key];

      if (value == null) {
        element.removeAttribute(key);
      } else {
        element.setAttribute(key, value);
      }
    }
  }
};
