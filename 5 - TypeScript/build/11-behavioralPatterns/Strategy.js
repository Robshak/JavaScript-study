"use strict";
var Strategy;
(function (Strategy) {
    class User {
    }
    class Auth {
        constructor(strategy) {
            this.strategy = strategy;
        }
        setStrategy(strategy) {
            this.strategy = strategy;
        }
        authUser(user) {
            return this.strategy.auth(user);
        }
    }
    class JWTStrategy {
        auth(user) {
            if (user.jwtToken) {
                return true;
            }
            return false;
        }
    }
    class GithubStrategy {
        auth(user) {
            if (user.githubToken) {
                return true;
            }
            return false;
        }
    }
    const user = new User();
    user.jwtToken = 'jwt token';
    const auth = new Auth(new JWTStrategy());
    console.log(auth.authUser(user));
    auth.setStrategy(new GithubStrategy());
    console.log(auth.authUser(user));
})(Strategy || (Strategy = {}));
