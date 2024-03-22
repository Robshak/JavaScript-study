namespace ChainOfMethod{
    interface IMiddleware{ // интерфейс абстрактного класса
        next(mid: IMiddleware): IMiddleware;
        handle(request: any): any;
    }

    abstract class AbstractMiddleware implements IMiddleware { // абстрактный класс 
        private nextMiddleware: IMiddleware;

        next ( mid: IMiddleware ): IMiddleware { // next()
            this.nextMiddleware = mid;
            return mid;
        }

        handle ( request: any ) { // рабочий метод
            if(this.nextMiddleware){
                return this.nextMiddleware.handle(request);
            }
            return;
        }
    }

    class AuthMiddleware extends AbstractMiddleware{ // самостоятельный компонент, унаследованный от абстрактного класса
        override handle ( request: any ) {
            console.log('AuthMiddleware');
            if(request.userId === 1){
                return super.handle(request);
            }
            return {error: "You don't log in"}
        }
    }

    class ValidateMiddleware extends AbstractMiddleware{ // самостоятельный компонент, унаследованный от абстрактного класса
        override handle ( request: any ) {
            console.log('ValidateMiddleware');
            if(request.body){
                return super.handle(request);
            }
            return {error: "haven't body"}
        }
    }

    class Controller extends AbstractMiddleware{ // самостоятельный компонент, унаследованный от абстрактного класса
        override handle ( request: any ) {
            console.log('Controller');
            return {success: request};
        }
    }

    //пример взаимодействия
    const controller = new Controller();
    const validate = new ValidateMiddleware();
    const auth = new AuthMiddleware();

    auth.next(validate).next(controller);

    console.log(auth.handle({
        userId: 1,
        body: "it's body"
    }))
}