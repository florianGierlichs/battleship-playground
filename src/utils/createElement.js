const createElement = (element, elementClass, elementContent) => {
  const createdElement = document.createElement(element);
  createdElement.className = elementClass;
  if (elementContent) {
    createdElement.innerText = elementContent;
  }

  return createdElement;
};

export default createElement;
