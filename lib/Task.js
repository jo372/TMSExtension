let Task = (function() {
  let taskProperties = {};

  class Task {
    constructor() {
      taskProperties = {
        id: null,
        title: null,
        description: null,
        priorityLevelId: null,
        dueDate: null,
        dueTime: null,
        startDate: null,
        startTime: null,
        totalElaspedTime: null,
        taskStatusId: null
      };
    }

    setId(newId) { taskProperties.id = newId;}
    getId() { return taskProperties.id; }
    setTitle(newTitle) { taskProperties.title = newTitle; }
    getTitle() { return taskProperties.title; }
    setDescription(newDescription) { taskProperties.description = newDescription; }
    getDescription() { return taskProperties.description; }
    setPriorityLevel(newPriorityLevel) {
      // TODO: validate that it's using the priority class.
      taskProperties.priorityLevel = newPriorityLevel;
    }
    getPriorityLevel() { return taskProperties.priorityLevel; }
    setDueDate(newDueDate){ taskProperties.dueDate = newDueDate;}
    getDueDate() { return taskProperties.dueDate; }
    setDueTime(newDueTime){ taskProperties.dueTime = newDueTime;}
    getDueTime() {  return taskProperties.dueTime; }
    setStartDate(newStartDate) { taskProperties.startDate = newStartDate; }
    getStartDate() {  return taskProperties.startDate; }
    setStartTime(newStartTime) { taskProperties.startTime = newStartTime; }
    getStartTime() {  return taskProperties.startTime; }
    setTotalElapsedTime(newTotalElaspedTime) { taskProperties.totalElaspedTime = newTotalElaspedTime; }
    getTotalElapsedTime() {  return taskProperties.totalElaspedTime; }
    setTaskStatus(newTaskStatus) { taskProperties.taskStatusId = newTaskStatus; }
    getTaskStatus() {  return taskProperties.taskStatusId; }
    getObject() { return taskProperties; }
  }

  return Task;
})();
