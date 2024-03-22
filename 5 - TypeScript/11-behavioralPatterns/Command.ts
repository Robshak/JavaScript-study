namespace Command{
    class User{ // просто класс юзера, для демонстрации
        constructor(public userId: number){}
    }

    class CommandHistory{ // просто класс истории, для демонстрации
        public commands: Command[] = [];

        push(command: Command){
            this.commands.push(command);
        }

        remove(command: Command){
            this.commands = this.commands.filter(c => c.commandId !== command.commandId);
        }
    }

    abstract class Command{ // просто класс команды, для демонстрации
        public commandId: number;

        abstract execute(): void;

        constructor(public history: CommandHistory){
            this.commandId = Math.random();
        }
    }

    class AddUserCommand extends Command{ // тот самый класс, который будет связующим звеном
        constructor(
            private user: User,
            private receiver: UserService,
            public history: CommandHistory){
            super(history);
        }

        execute (): void {
            this.receiver.saveUser(this.user);
            this.history.push(this);
        }

        undo(){
            this.receiver.deleteUser(this.user);
            this.history.remove(this);
        }
    }

    class UserService{ // класс, до которого мы хотим достучаться
        saveUser(user: User){
            console.log(`saving user with id ${user.userId}`);
        }
        deleteUser(user: User){
            console.log(`deleting user with id ${user.userId}`);
        }
    }

    class Controller{ // класс, который хочет достучаться
        receiver: UserService;
        history: CommandHistory = new CommandHistory();

        addReceiver(receiver: UserService){
            this.receiver = receiver;
        }

        run() {
            const addUserCommand = new AddUserCommand(
                new User(1),
                this.receiver,
                this.history
            );
            addUserCommand.execute();
            console.log(addUserCommand.history);
            addUserCommand.undo();
            console.log(addUserCommand.history);
        }
    }


    // пример взаимодействия
    const controller = new Controller();
    controller.addReceiver(new UserService());
    controller.run();
}