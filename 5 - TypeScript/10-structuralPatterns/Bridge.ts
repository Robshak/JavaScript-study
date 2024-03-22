namespace Bridge{
    interface IProvider{ // интерфейс модификации
        sendMessage(message: string): void;
        connect(config: unknown): void;
        disconnect(): void;
    }

    class TelegramProvider implements IProvider{ // вид модификации
        sendMessage ( message: string ): void {
            console.log(message);
        }
        connect ( config: string ): void {
            console.log(config);
        }
        disconnect (): void {
            console.log('Disconnected TG');
        }

    }

    class WhatsUpProvider implements IProvider{ // вид модификации
        sendMessage ( message: string ): void {
            console.log(message);
        }
        connect ( config: string ): void {
            console.log(config);
        }
        disconnect (): void {
            console.log('Disconnected WU');
        }

    }

    class NotificationSender{ // класс, выполняющий действие с любой модификацией независимо от того какая она
        constructor(private provider: IProvider){}

        send(){
            this.provider.connect('connect!');
            this.provider.sendMessage('message');
            this.provider.disconnect();
        }
    }

    class DelayNotificationSender extends NotificationSender{ // класс изменённого действия
        constructor(provider: IProvider){
            super(provider);
        }

        sendDelayed(){
            // Delay
            this.send();
        }
    }

    // пример взаимодействия
    const sender = new NotificationSender(new TelegramProvider());
    const sender2 = new NotificationSender(new WhatsUpProvider());
    sender.send();
    sender2.send();
}