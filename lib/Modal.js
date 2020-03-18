let Modal = (function(){
  // these properties will be used for the modal.
  let properties = {
    title: null,
    header: null,
    body: null,
    footer: null,
    canMaximise: null,
    canMinimise: null,
    isMinimised: null,
    isMaximised: null,
    element: null
  };

  let createElement = function() {
    let newElement = document.createElement('div');
        newElement.classList.add(SkeletonCSS.container_fluid, 'modal');
        newElement.dataset.name = "modal";
    return newElement;
  }
  // function to create a new header dom element.
  let createHeader = function() {
    // creating a new element to hold the header element.
    let newHeader = document.createElement('div');
        newHeader.classList.add("modal-header");

    // creating a new title to hold the title text in the header.
    let newTitle = document.createElement('h4');
        newTitle.innerText = properties.title;

    let newMenuButtonContainer = document.createElement('div');
        newMenuButtonContainer.dataset.name = "menu-button-container";
    // appending the new title to the header.
    newHeader.append(newTitle);

    // creating a container for the buttons.
    let newButtonContainer = document.createElement('div');

    if (properties.canMinimise) {
      let newMinimiseButton = document.createElement('div');
          newMinimiseButton.classList.add('modal-button', 'yellow');
          newMinimiseButton.addEventListener('click', function() {
            // setting the boolean to the opposite when clicked.
            properties.isMinimised = !properties.isMinimised;

            // if the modal is not minimised minimise it else show it.
            if (properties.isMinimised) properties.element.display = "none";

          });

          // appending the new minimise button to the modal.
          newMenuButtonContainer.append(newMinimiseButton);
    }

    // if you can maximise the modal create a maximise button
    if (properties.canMaximise) {
      let newMaximiseButton = document.createElement('div');
          newMaximiseButton.classList.add('modal-button', 'green');
          newMaximiseButton.addEventListener('click', function() {
            // setting the boolean to the opposite when clicked.
            properties.isMaximised = !properties.isMaximised;

            // if the modal is not maximised maximise it.
            if (properties.isMaximised) {
              properties.element.style = "width:100%; height:100%; top:0; left:0; position:absolute";
              properties.element.classList.add('noBorder');
            } else {
              properties.element.style = "";
              properties.element.classList.remove('noBorder');
            }
          });
          newMenuButtonContainer.append(newMaximiseButton);
    }

    // create the close button no matter what.
    let newCloseButton = document.createElement('modal-button');
        newCloseButton.classList.add('modal-button', 'red');
        newCloseButton.addEventListener('click', function() {
          document.body.removeChild(properties.element);
        });
        // appending the close button
        newMenuButtonContainer.append(newCloseButton);

        newHeader.append(newMenuButtonContainer);
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
