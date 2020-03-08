
// TODO: implement it so it can read all windows urls.
//https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=2ahUKEwjI9KOcxIroAhWQgVwKHSRjCjsQFjACegQIBhAB&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FMozilla%2FAdd-ons%2FWebExtensions%2FAPI%2Fwindows%2FgetAll&usg=AOvVaw0WwKblIQIzA4dY_ESh2ep_

function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}

function getActiveTab() {
  return browser.tabs.query({currentWindow:true, active: true});
}

function parseTabs(tabs) {
  let parsedTabs = [];
  for(let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let tabObj = {
      id: tab.id,
      title: tab.title,
      url: tab.url,
      watchTime: 0
    }
    parsedTabs.push(tabObj);
  }
  return parsedTabs; 
}

console.log("clicked!");

getCurrentWindowTabs().then((tabs) => {
  // getting the current tabs
  let parsedTabs = parseTabs(tabs);
  let activeTabId = 0; 

  // getting the current time in seconds 
  let currentTimeInSeconds = 0;
  // getting the start time 
  let startTime = new Date().getTime();
  // setting a max seconds counter for debugging.
  let maxSeconds = 1;

  // creating a timer that will loop through the web pages and assign time when seen.
  var tabTimer = setInterval(() => {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;

    if(elapsedTime >= 1000) {
      currentTimeInSeconds += 1;
      
      //let currentTab = parsedTabs.filter((tab) => tab.id === activeTabId);
      //console.log(activeTabId, currentTab);
      //currentTab.watchTime = currentTimeInSeconds;
      
      // TODO implement async, so it only applys watch time to tabs selected.
      // also need to think about other windows that are open.
      for(let tab of parsedTabs) {
        tab.watchTime += currentTimeInSeconds;
      }

      if(currentTimeInSeconds >=  maxSeconds) { 
        for(let tab of parsedTabs) {
          console.log(tab);
        }
        clearInterval(tabTimer); 
      }
      startTime = new Date().getTime();
    }
  }, (1000/70));
});

/*
browser.tabs.onActivated.addListener(function(activeTab){
  activeTabId = activeTab.tabId;
  console.log(activeTabId);
});*/
