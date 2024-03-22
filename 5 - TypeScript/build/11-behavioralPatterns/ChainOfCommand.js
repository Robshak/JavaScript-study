"use strict";
var ChainOfMethod;
(function (ChainOfMethod) {
    class AbstractMiddleware {
        next(mid) {
            this.nextMiddleware = mid;
            return mid;
        }
        handle(request) {
            if (this.nextMiddleware) {
                return this.nextMiddleware.handle(request);
            }
            return;
        }
    }
    class AuthMiddleware extends AbstractMiddleware {
        handle(request) {
            console.log('AuthMiddleware');
            if (request.userId === 1) {
                return super.handle(request);
            }
            return { error: "You don't log in" };
        }
    }
    class ValidateMiddleware extends AbstractMiddleware {
        handle(request) {
            console.log('ValidateMiddleware');
            if (request.body) {
                return super.handle(request);
            }
            return { error: "haven't body" };
        }
    }
    class Controller extends AbstractMiddleware {
        handle(request) {
            console.log('Controller');
            return { success: request };
        }
    }
    const controller = new Controller();
    const validate = new ValidateMiddleware();
    const auth = new AuthMiddleware();
    auth.next(validate).next(controller);
    console.log(auth.handle({
        userId: 1,
        body: "it's body"
    }));
})(ChainOfMethod || (ChainOfMethod = {}));
