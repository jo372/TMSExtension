
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
        browser.tabs.create({
          url: 'timemanagementsystem.html'
        });
    });

    appBody.append(newButton);

    document.body.append(appBody);
  }

console.log("asdasd");
})();

/*
const appBodyId = 'appbody';
const rowClass = 'row';

var appBody = document.getElementById(appBodyId);

function createRow(url) {
  let newRow = document.createElement('div');
      newRow.classList.add(rowClass);
      newRow.innerText = 'url:' + url;
  return newRow;
}

function generateRandomColor() {
  // code from: https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript
  let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  return randomColor;
}

// no app body exists, create body
if (!appBody) {
  let newAppBody = document.createElement('div');
      newAppBody.id = appBodyId;
  appBody = newAppBody;
  document.body.append(appBody);

  for(let i=0; i < 10; i++) {
    let newlyGeneratedColor = generateRandomColor();
    let newRow = createRow();
        newRow.style = 'background-color:' + newlyGeneratedColor;
        newRow.innerText = i;
    appBody.append(newRow);
  }

}*/
