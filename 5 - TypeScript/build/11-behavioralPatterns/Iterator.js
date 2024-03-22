"use strict";
var Iterator;
(function (Iterator) {
    class Task {
        constructor(priority) {
            this.priority = priority;
        }
    }
    class TaskList {
        constructor() {
            this.tasks = [];
        }
        sortByPriority() {
            this.tasks = this.tasks.sort((a, b) => {
                if (a.priority >= b.priority) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        addTask(task) {
            this.tasks.push(task);
        }
        getTask() {
            return this.tasks;
        }
        count() {
            return this.tasks.length;
        }
        getIterator() {
            return new PriorityTaskIterator(this);
        }
    }
    class PriorityTaskIterator {
        constructor(taskList) {
            this.position = 0;
            taskList.sortByPriority();
            this.taskList = taskList;
        }
        current() {
            return this.taskList.getTask()[this.position];
        }
        next() {
            this.position += 1;
            return this.taskList.getTask()[this.position];
        }
        prev() {
            this.position -= 1;
            return this.taskList.getTask()[this.position];
        }
        index() {
            return this.position;
        }
    }
    const taskList = new TaskList();
    taskList.addTask(new Task(2));
    taskList.addTask(new Task(4));
    taskList.addTask(new Task(3));
    taskList.addTask(new Task(1));
    const iterator = taskList.getIterator();
    console.log(iterator.index());
    console.log(iterator.current());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.current());
    console.log(iterator.prev());
    console.log(iterator.index());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
})(Iterator || (Iterator = {}));
