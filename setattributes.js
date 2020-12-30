module.exports = function setAttributes(element, attributes) {
  Object.entries(attributes).forEach(([name, value]) => {
    if (value == null) {
      return element.removeAttribute(name);
    }
    element.setAttribute(name, value);
  });
};
