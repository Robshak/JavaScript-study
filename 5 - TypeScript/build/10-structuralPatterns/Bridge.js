"use strict";
var Bridge;
(function (Bridge) {
    class TelegramProvider {
        sendMessage(message) {
            console.log(message);
        }
        connect(config) {
            console.log(config);
        }
        disconnect() {
            console.log('Disconnected TG');
        }
    }
    class WhatsUpProvider {
        sendMessage(message) {
            console.log(message);
        }
        connect(config) {
            console.log(config);
        }
        disconnect() {
            console.log('Disconnected WU');
        }
    }
    class NotificationSender {
        constructor(provider) {
            this.provider = provider;
        }
        send() {
            this.provider.connect('connect!');
            this.provider.sendMessage('message');
            this.provider.disconnect();
        }
    }
    class DelayNotificationSender extends NotificationSender {
        constructor(provider) {
            super(provider);
        }
        sendDelayed() {
            this.send();
        }
    }
    const sender = new NotificationSender(new TelegramProvider());
    const sender2 = new NotificationSender(new WhatsUpProvider());
    sender.send();
    sender2.send();
})(Bridge || (Bridge = {}));
