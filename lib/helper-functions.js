var createDOMElement = function(elementName) {
  let newElement = document.createElement(elementName);
  return newElement;
}

var createDOMButton = function(btnText){
  let newButton = createDOMElement('button');
      newButton.innerText = btnText;
  return newButton;
}

var setDOMValue = function(domEl, value) {
  domEl.value = value;
}
