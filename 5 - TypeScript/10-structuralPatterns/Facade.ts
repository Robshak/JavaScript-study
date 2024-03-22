namespace Facade{
    class Notify{ // какая-то реализация
        send(template: string, to: string){
            console.log(`Send ${template}: ${to}`);
        }
    }

    class Log{ // какая-то реализация
        log(message: string){
            console.log(message);
        }
    }

    class Template{ // какая-то реализация
        private templates = [
            {name: 'other', template: '<h1>Template!<h1>'}
        ];

        getByName(name: string){
            return this.templates.find(t => t.name == name);
        }
    }

    class NotificationFacade{ // фасад, который упрощает нам взаимодействие с кодом
        private notify: Notify;
        private logger: Log;
        private template: Template;

        constructor(){
            this.notify = new Notify();
            this.logger = new Log();
            this.template = new Template();
        }

        send(to: string, templateName: string){
            const data = this.template.getByName(templateName);
            if(!data){
                this.logger.log("template don't found");
                return;
            }
            this.notify.send(data.template, to);
            this.logger.log("template sended");
        }
    }

    // пример взаимодействия
    const s = new NotificationFacade();
    s.send('Bob', 'other');
}