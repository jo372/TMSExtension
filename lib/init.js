
function createButton(text) {
  let newButton = document.createElement('button');
      newButton.innerText = text;
  return newButton;
}

(function(){
  // declaring application variables.
  const appBodyId = 'appBody';

  const rowCSSClass = 'rows';

  let appBody = document.getElementById(appBodyId);

  // if there isn't an app body, create one.
  if (!appBody) {
    let newAppBody = document.createElement('div');
        newAppBody.id = appBodyId;

    appBody = newAppBody;

    // creating a new button with event listeners.
    let newButton = createButton('Create Task!');

    newButton.addEventListener('click', () => {
      let currentBrowser;
      let popupUrl = 'timemanagementsystem.html';

      // check if this is a mozilla or chrome extension application.
      try {
        currentBrowser = browser;
      } catch (e) {
        popupUrl = 'popup/' + popupUrl;
        currentBrowser = chrome;
      }

      // when the user opens the tab, I will show the user a new screen.
      currentBrowser.tabs.create({
        url: popupUrl
      });
    });

    appBody.append(newButton);

    document.body.append(appBody);
  }
})();
