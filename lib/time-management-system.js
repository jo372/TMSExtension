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

  // TODO: need to refactor this entire code.
  if(!taskCreateButton) {
    let newTaskButton = createDOMButton("New Task");

        newTaskButton.classList.add('fixed');
        newTaskButton.style = "bottom:10px; right: 10px; z-index:3;";

        newTaskButton.addEventListener('click', function(){
          let taskManagerCreated = document.getElementById('taskmanager');
          if(!taskManagerCreated) {
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
            newModal.getElement().id = "taskmanager";
            // appending the element to the document.
            app.append(newModal.getElement());

            setDOMValue(document.getElementById(START_DATE_ID),  new Date().toLocaleDateString());
            setDOMValue(document.getElementById(START_TIME_ID), new Date().toLocaleTimeString());

            let newTimepicker = new DateTimePicker.timepicker;
            let el = document.getElementById(END_TIME_ID);
            newTimepicker.appendTo(el);
            //$(`#${END_DATE_ID}`).datepicker();
          }
        });
      taskDetails.append(newTaskButton);

  }
})();
