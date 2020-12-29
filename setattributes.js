module.exports = function setAttributes(el, attrs) {
  Object.entries(attrs).forEach(([name, value]) => {
    if (value == null) {
      return el.removeAttribute(name);
    }
    el.setAttribute(name, value);
  });
};
