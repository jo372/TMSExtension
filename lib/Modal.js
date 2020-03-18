let Modal = (function(){
  // these properties will be used for the modal.
  let properties = {
    title: null,
    body: null,
    footer: null,
    canMaximise: null,
    canMinimise: null,
    isMinimised: false,
    isMaximised: false,
    element: null
  };

  // function to create a new header dom element.
  let createHeader = function(titleText) {
    // creating a new element to hold the header element.
    let newHeader = document.createElement('div');

    // creating a new title to hold the title text in the header.
    let newTitle = document.createElement('h2');
        newTitle.innerText = titleText;


    // appending the new title to the header.
    newHeader.append(newTitle);

    // creating a container for the buttons.
    let newButtonContainer = document.createElement('div');

    if (properties.canMinimise) {
      let newMinimiseButton = document.createElement('div');
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
      let newMaximiseButton = document.createElement('div');
          newMaximiseButton.innerText = "x";
          newMaximiseButton.addEventListener('click', function() {
            // setting the boolean to the opposite when clicked.
            properties.isMaximised = !properties.isMaximised;

            // if the modal is not maximised maximise it.
            if (properties.isMaximised) {

            }
          });
    }

    return newTitle;
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
    constructor(title) {
      properties.title = createNewTitle(title);
    }
    isMaximisable(newMaximiseProperty) { properties.canMaximise = newMaximiseProperty; }
    isMinimiseable(newMinimisableProperty) { properties.canMinimise = newMinimisableProperty; }
    getBody() { return properties.body; }

  }
  return Modal;
})();
