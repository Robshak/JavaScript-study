// interface IUserService{
//     users: number;
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService{
//     @Max(100)
//     users: number = 20;

//     getUsersInDatabase (): number {
//         return this.users;
//     }
// }

// function Max(maxima: number){
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//     ) => {
//         let value:number;
//         const setter = function(newValue:number){
//             if(newValue > maxima){
//                 console.log('over number!');
//             }
//             else{
//                 value = newValue;
//             }
//         }
//         const getter = function(){
//             return value;
//         }

//         Object.defineProperty(target, propertyKey, {
//             set: setter,
//             get: getter
//         });
//     }
// }

// // console.log(new UserService().getUsersInDatabase());
// const user = new UserService();

// user.users = 200;
// console.log(user.users);