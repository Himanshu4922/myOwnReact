export function render(reactObject, rootElement) {
  function createDOMElement(reactObject) {
    if (typeof reactObject === "string") {
      const textNode = document.createTextNode(reactObject);
      return textNode;
    } else if (Array.isArray(reactObject)) {
      return reactObject.map(function (obj) {
        return createDOMElement(obj);
      });
    } else if (typeof reactObject.type === "function") {
      return createDOMElement(reactObject.type(reactObject.props));
    }
    const { type, props } = reactObject;
    const newElement = document.createElement(type);

    if (props) {
      Object.entries(props).forEach(function ([key, value]) {
        if (key === "style") {
          Object.entries(value).forEach(function ([style, value]) {
            newElement.style[style] = value;
          });
        } else if (key !== "children") {
          newElement[key] = value;
        }
      });
      props.children.forEach(function (child) {
        if (typeof child === "string") {
          const textNode = document.createTextNode(child);
          newElement.append(textNode);
        } else if (typeof child === "number") {
          const textNode = document.createTextNode(child);
          newElement.append(textNode);
        } else if (Array.isArray(child)) {
          child.forEach(function (eachChild) {
            newElement.append(createDOMElement(eachChild));
          });
        } else if (!child) {
        } else {
          newElement.append(createDOMElement(child));
        }
      });
    }

    return newElement;
  }
  const DOMElement = createDOMElement(reactObject);
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}
