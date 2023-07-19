module.exports = function setAttributes(element, attributes) {
  for (var name in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, name)) {
      var value = attributes[name];

      if (value == null) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value);
      }
    }
  }
};
