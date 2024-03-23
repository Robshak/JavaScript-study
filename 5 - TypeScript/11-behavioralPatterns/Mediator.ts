namespace Mediator{
    interface IMediator{ // интерфейс медиатора
        notify(sender: string, event: string): void;
    }

    abstract class Mediated{ // абстрактный пульт управления медиатором
        mediator: IMediator;
        setMediator(mediator: IMediator){
            this.mediator = mediator;
        }
    }

    class Notifications{ // обычный класс
        send(){
            console.log('sending message');
        }
    }

    class Log{ // обычный класс
        log(message: string){
            console.log(message);
        }
    }

    class EventHandler extends Mediated{ // пульт управления медиатором
        myEvent(){
            this.mediator.notify('EventHandler', 'myEvent'); // так мы можем взаимодействовать с ними не прописывая на прямую заимодействие с каждым
        }
    }

    class NotificationMediator implements IMediator{ // класс - некий протокол взаимодействия, который обеспечит нам лёгкую связь между нашими классами
        constructor(
            public notifications: Notifications,
            public logger: Log,
            public handler: EventHandler
        ){}

        notify ( sender: string, event: string ): void {
            switch(event){
                case 'myEvent':
                    this.notifications.send();
                    this.logger.log('sended');
                    break;
            }
        }
    }

    // пример взаимодействия
    const handler = new EventHandler();
    const logger = new Log();
    const notifications = new Notifications();

    const m = new NotificationMediator(
        notifications,
        logger,
        handler
    );
    handler.setMediator(m);
    handler.myEvent();
}