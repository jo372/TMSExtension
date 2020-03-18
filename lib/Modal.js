let Modal = (function(){
  // these properties will be used for the modal.
  let properties = {
    title: null,
    header: null,
    body: null,
    footer: null,
    canMaximise: null,
    canMinimise: null,
    isMinimised: false,
    isMaximised: false,
    element: null
  };

  let createElement = function() {
    let newElement = document.createElement('div');
        newElement.classList.add(SkeletonCSS.container_fluid);
        newElement.dataset.name = "modal";
    return newElement;
  }
  // function to create a new header dom element.
  let createHeader = function() {
    // creating a new element to hold the header element.
    let newHeader = document.createElement('div');
        newHeader.dataset.name = "modal-header";

    // creating a new title to hold the title text in the header.
    let newTitle = document.createElement('h2');
        newTitle.innerText = properties.title;


    // appending the new title to the header.
    newHeader.append(newTitle);

    // creating a container for the buttons.
    let newButtonContainer = document.createElement('div');

    if (properties.canMinimise) {
      let newMinimiseButton = document.createElement('button');
          newMinimiseButton.innerText = "-";
          newMinimiseButton.addEventListener('click', function() {
            // setting the boolean to the opposite when clicked.
            properties.isMinimised = !properties.isMinimised;

            // if the modal is not minimised minimise it else show it.
            if (properties.isMinimised) properties.element.display = "none";

          });

          // appending the new minimise button to the modal.
          newHeader.append(newMinimiseButton);
    }

    if (properties.canMaximise) {
      let newMaximiseButton = document.createElement('button');
          newMaximiseButton.innerText = "x";
          newMaximiseButton.addEventListener('click', function() {
            // setting the boolean to the opposite when clicked.
            properties.isMaximised = !properties.isMaximised;

            // if the modal is not maximised maximise it.
            if (properties.isMaximised) {
              properties.element.style = "width:100%; top:0; left:0; position:absolute";
            }
          });
          newHeader.append(newMaximiseButton);
    }

    return newHeader;
  }

 // function to create the body dom element.
 let createBody = function() {

 }

 // function to create the footer dom element.
 let createFooter = function() {

 }

 // the class that will be returned
  class Modal {
    // in the constructor I will pass the title, body and footer
    constructor(settings) {
      if(!settings) { return false; }
      // now we have properties create object.
      for(let prop in settings) {
        properties[prop] = settings[prop];
      }
      properties.header = createHeader();
      properties.element = createElement();
      properties.element.append(this.getHeader());

    }
    isMaximisable(newMaximiseProperty) { properties.canMaximise = newMaximiseProperty; }
    isMinimiseable(newMinimisableProperty) { properties.canMinimise = newMinimisableProperty; }
    getHeader() { return properties.header; }
    getBody() { return properties.body; }
    getElement() { return properties.element; }
  }
  return Modal;
})();
