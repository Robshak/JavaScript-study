namespace Iterator{
    class Task{ // элемент структуры
        constructor(public priority: number){}
    }

    class TaskList{ // структуры
        private tasks: Task[] = [];

        public sortByPriority(){
            this.tasks = this.tasks.sort((a, b) => {
                if(a.priority >= b.priority){
                    return 1;
                }
                else{
                    return -1;
                }
            })
        }

        public addTask(task: Task){
            this.tasks.push(task);
        }

        public getTask(){
            return this.tasks;
        }

        public count(){
            return this.tasks.length;
        }

        public getIterator(){ // установка итератора
            return new PriorityTaskIterator(this); // можно реаизовать, что бы была возможность менять на лету, но для простоты примера пускай будет так
        }
    }

    interface IIterator<T>{ // интерфейс итератора
        current(): T|undefined;
        next(): T|undefined;
        prev(): T|undefined;
        index(): number;
    }

    class PriorityTaskIterator implements IIterator<Task>{ // итератор
        private position: number = 0;
        private taskList: TaskList;

        constructor(taskList: TaskList){
            taskList.sortByPriority();
            this.taskList = taskList;
        }

        current (): Task | undefined {
            return this.taskList.getTask()[this.position];
        }
        next (): Task | undefined {
            this.position += 1;
            return this.taskList.getTask()[this.position];
        }
        prev (): Task | undefined {
            this.position -= 1;
            return this.taskList.getTask()[this.position];
        }
        index (): number {
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
}