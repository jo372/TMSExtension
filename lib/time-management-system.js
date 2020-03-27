
(function(){

  let taskSections = document.querySelectorAll('.list-section');
  let taskDetails = document.getElementById('taskDetails');
  let app = document.body;
  let tasks = [];

  let createDOMElement = function(elementName) {
    let newElement = document.createElement(elementName);
    return newElement;
  }

  // task button
  let createDOMButton = function(btnText){
    let newButton = createDOMElement('button');
        newButton.innerText = btnText;
    return newButton;
  }

  let setDOMValue = function(domEl, value) {
    domEl.value = value;
  }

  const TASK_CREATE_BUTTON_ID = "taskBtn";
  const START_TIME_ID = "startTime",
        START_DATE_ID = "startDate";

  let taskCreateButton = document.getElementById(TASK_CREATE_BUTTON_ID);

  if(!taskCreateButton) {
    let newTaskButton = createDOMButton("New Task");
        newTaskButton.addEventListener('click', function(){
          let bodyHtmlStr = '<form>' +
          '<div class="row">' +
          '  <div class="six columns">' +
          '    <label for="exampleEmailInput">Task Name</label>' +
          '    <input class="u-full-width" type="text" id="exampleEmailInput">' +
          '  </div>' +
          '  <div class="six columns">' +
          '    <label for="exampleRecipientInput">Priority Level</label>' +
          '    <select class="u-full-width" id="exampleRecipientInput">' +
          '      <option value="0">Low</option>' +
          '      <option value="1">Normal</option>' +
          '      <option value="2">High</option>' +
          '      <option value="3">Urgent</option>' +
          '    </select>' +
          '  </div>' +
          '<label for="exampleMessage">Task Description</label>' +
          '<textarea class="u-full-width" id="exampleMessage"></textarea>' +
          '</div>' +
          '<div class="row">' +
          '  <div class="six columns">' +
          '    <label for="startDate">Start Date</label>' +
          '    <input class="u-full-width" type="text" id="' + START_DATE_ID + '" disabled>' +
          '  </div>' +
          '  <div class="six columns">' +
          '    <label for="exampleEmailInput">End Date</label>' +
          '    <input class="u-full-width" type="text" id="exampleEmailInput">' +
          '  </div>' +
          '</div>' +
          '<div class="row">' +
          '  <div class="six columns">' +
          '    <label for="startTime">Start Time</label>' +
          '    <input class="u-full-width" type="text" id="' + START_TIME_ID + '" disabled>' +
          '  </div>' +
          '  <div class="six columns">' +
          '    <label for="exampleEmailInput">End Time</label>' +
          '    <input class="u-full-width" type="text" id="exampleEmailInput">' +
          '  </div>' +
          '</div>' +

          '<div class="row">' +
          '<input class="button-primary" type="submit" value="Submit">' +
          '</div>' +
          '</form>';

          let newModal = new Modal({
            title: "Create Task",
            canMaximise: true,
            canMinimise: true,
            body: bodyHtmlStr,
            footer: "Jordan O'Hara"
          });

          newModal.getElement().classList.add('container');
          // appending the element to the document.
          app.append(newModal.getElement());

          setDOMValue(document.getElementById(START_DATE_ID),  new Date().toLocaleDateString());
          setDOMValue(document.getElementById(START_TIME_ID), new Date().toLocaleTimeString())
        });
      taskDetails.append(newTaskButton);
  }
  /*
  // Creating an array to hold the test data
  let testData = [];
  // creating an appending test data to array.
  for(let i=0; i < 10; i++) {
    let newTask = new Task();
        newTask.setId(i);
        newTask.setTitle(`Task ${i}`);
        newTask.setDescription(`Task ${i}, hello welcome to ....`);
        newTask.setPriorityLevel(0);
        newTask.setDueDate(new Date());
        newTask.setDueTime(new Date());
        newTask.setStartDate(new Date());
        newTask.setStartTime(new Date());
        newTask.setTotalElapsedTime(1);
        newTask.setTastStatus(2);
      testData.push(newTask.getObject());
  }
  // looping through the task sections and adding event listeners.
  for(taskSection of taskSections) {
    // getting the section id.
    let sectionId = taskSection.dataset.id;

    // adding the event listener task section to show the tasks with status
    taskSection.addEventListener('click', () => {

      // wiping the previous data from innerText
      taskDetails.innerText = '';

      // TODO: make a request to the server and get the current tasks of the user.
      // for now I will display random information.

      for(task of testData) {

        let newTask = document.createElement('div');
            newTask.dataset.id = task.id;
            newTask.dataset.startTime = task.startTime;

        let newTaskTitle = document.createElement('h5');
            newTaskTitle.innerText = task.title;

        let newTaskDescription = document.createElement('p');
            newTaskDescription.innerText = task.description;

        newTask.append(newTaskTitle, newTaskDescription);
        taskDetails.append(newTask);

      }
    });
  }

  /*let newModal = new Modal({
    title: "Hello world!",
    canMaximise: true,
    canMinimise: true,
    body: '<p>hello world!</p>',
    footer: "Jordan O'Hara"
  });

  taskDetails.append(newModal.getElement());
  console.log('creating a new modal')*/
})();
