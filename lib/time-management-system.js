(function(){
  let taskSections = document.querySelectorAll('.list-section');
  let taskDetails = document.getElementById('taskDetails');
  let app = document.body;
  let tasks = [];

  const TASK_CREATE_BUTTON_ID = "taskBtn";
  const TASK_NAME_ID = "taskName",
        TASK_DESCRIPTION_ID = "taskDescription",
        START_TIME_ID = "startTime",
        END_TIME_ID = "endTime",
        START_DATE_ID = "startDate",
        END_DATE_ID = "endDate",
        PRIORITY_LEVEL_ID = "priorityLevel",
        TASK_SUBMIT_BUTTON_ID = "taskSubmit";

  let taskCreateButton = document.getElementById(TASK_CREATE_BUTTON_ID);

  if(!taskCreateButton) {
    let newTaskButton = createDOMButton("New Task");

        newTaskButton.classList.add('fixed');
        newTaskButton.style = "bottom:10px; right: 10px; z-index:3;";

        newTaskButton.addEventListener('click', function(){
          let bodyHtmlStr = '<form>' +
          '<div class="row">' +
          '  <div class="six columns">' +
          '    <label for="' + TASK_NAME_ID + '">Task Name</label>' +
          '    <input class="u-full-width" type="text" id="' + TASK_NAME_ID + '">' +
          '  </div>' +
          '  <div class="six columns">' +
          '    <label for="' + PRIORITY_LEVEL_ID + '">Priority Level</label>' +
          '    <select class="u-full-width" id="' + PRIORITY_LEVEL_ID + '">' +
          '      <option value="0">Low</option>' +
          '      <option value="1">Normal</option>' +
          '      <option value="2">High</option>' +
          '      <option value="3">Urgent</option>' +
          '    </select>' +
          '  </div>' +
          '<label for="' + TASK_DESCRIPTION_ID + '">Task Description</label>' +
          '<textarea class="u-full-width" id="' + TASK_DESCRIPTION_ID + '"></textarea>' +
          '</div>' +
          '<div class="row">' +
          '  <div class="six columns">' +
          '    <label for="' + START_DATE_ID + '">Start Date</label>' +
          '    <input class="u-full-width" type="text" id="' + START_DATE_ID + '" disabled>' +
          '  </div>' +
          '  <div class="six columns">' +
          '    <label for="' + END_DATE_ID + '">End Date</label>' +
          '    <input class="u-full-width" type="text" id="' + END_DATE_ID + '">' +
          '  </div>' +
          '</div>' +
          '<div class="row">' +
          '  <div class="six columns">' +
          '    <label for="' + START_TIME_ID + '">Start Time</label>' +
          '    <input class="u-full-width" type="text" id="' + START_TIME_ID + '" disabled>' +
          '  </div>' +
          '  <div class="six columns">' +
          '    <label for="' + END_TIME_ID + '">End Time</label>' +
          '    <input class="u-full-width" type="text" id="' + END_TIME_ID + '">' +
          '  </div>' +
          '</div>' +

          '<div class="row">' +
          '<input class="button-primary" type="submit" value="Submit" id="' + TASK_SUBMIT_BUTTON_ID + '">' +
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
          setDOMValue(document.getElementById(START_TIME_ID), new Date().toLocaleTimeString());

          let newTimepicker = new DateTimePicker.timepicker;
          let el = document.getElementById(END_TIME_ID);
              newTimepicker.appendTo(el);
          //$(`#${END_DATE_ID}`).datepicker();
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
