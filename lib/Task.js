let Task = (function() {
  let taskProperties = new WeakMap();

  class Task {
    constructor() {
      taskProperties.set(this, {
        id: null,
        title: null,
        priorityLevelId: null,
        dueDate: null,
        dueTime: null,
        startDate: null,
        startTime: null,
        totalElaspedTime: null,
        taskStatusId: null
      });
    }

    setId(id) { taskProperties.set(this, {id: id}); }
    getId() { return taskProperties.get(this).id; }
    setTitle(title) { taskProperties.set(this, {title: title}); }
    getTitle() { return taskProperties.get(this).title; }
    setPriorityLevel(priorityLevel) {
      // TODO: validate that it's using the priority class.
      taskProperties.set(this).priorityLevel = priorityLevel;
    }
    getProrityLevel() { return taskProperties.get(this).priorityLevel; }
    setDueDate(dueDate){}
    getDueDate() {}
    setDueTime(dueTime){}
    getDueTime() {}
    setStartDate(startDate) {}
    getStartDate() {}
    setStartTime(startTime) {}
    getStartTime() {}
    setTotalElapsedTime(totalElaspedTime) {}
    getTotalElapsedTime() {}
    setTastStatus(taskStatus) {}
    getTaskStatus() {}
  }

  return Task;
})();
