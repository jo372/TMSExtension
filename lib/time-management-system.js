(function(){
  let taskSections = document.querySelectorAll('.list-section');
  let taskDetails = document.getElementById('taskDetails');

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

  let newModal = new Modal({
    title: "Hello world!",
    canMaximise: true,
    canMinimise: true
  });

  document.body.append(newModal.getElement());
  console.log('creating a new modal')
})();
