"use strict";
var Mediator;
(function (Mediator) {
    class Mediated {
        setMediator(mediator) {
            this.mediator = mediator;
        }
    }
    class Notifications {
        send() {
            console.log('sending message');
        }
    }
    class Log {
        log(message) {
            console.log(message);
        }
    }
    class EventHandler extends Mediated {
        myEvent() {
            this.mediator.notify('EventHandler', 'myEvent');
        }
    }
    class NotificationMediator {
        constructor(notifications, logger, handler) {
            this.notifications = notifications;
            this.logger = logger;
            this.handler = handler;
        }
        notify(sender, event) {
            switch (event) {
                case 'myEvent':
                    this.notifications.send();
                    this.logger.log('sended');
                    break;
            }
        }
    }
    const handler = new EventHandler();
    const logger = new Log();
    const notifications = new Notifications();
    const m = new NotificationMediator(notifications, logger, handler);
    handler.setMediator(m);
    handler.myEvent();
})(Mediator || (Mediator = {}));
