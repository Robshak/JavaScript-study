namespace Strategy{
    class User{ // класс для демонстрации
        githubToken: string;
        jwtToken: string;
    }

    interface IAuthStratagy{ // интерфейс стратегии
        auth(user: User): boolean;
    }

    class Auth{ // класс, который взаимодействует со стратегиями
        constructor(private strategy: IAuthStratagy){}

        public setStrategy(strategy: IAuthStratagy){
            this.strategy = strategy;
        }

        public authUser(user: User): boolean{
            return this.strategy.auth(user);
        }
    }

    class JWTStrategy implements IAuthStratagy{ // стратегия
        auth(user: User): boolean{
            if(user.jwtToken){
                return true;
            }
            return false;
        }
    }

    class GithubStrategy implements IAuthStratagy{ // стратегия
        auth(user: User): boolean{
            if(user.githubToken){
                return true;
            }
            return false;
        }
    }

    // пример взаимодействия
    const user = new User();
    user.jwtToken = 'jwt token';

    const auth = new Auth(new JWTStrategy());
    console.log(auth.authUser(user));

    auth.setStrategy(new GithubStrategy());
    console.log(auth.authUser(user));
}