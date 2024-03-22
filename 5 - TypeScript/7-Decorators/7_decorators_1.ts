// interface IUserService{
//     users: number;
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService{
//     users: number = 200;
//     getUsersInDatabase (): number {
//         return this.users;
//     }
// }

// function nullUser(obj: IUserService){
//     obj.users = 0;
//     return obj;
// }

// console.log(new UserService().getUsersInDatabase());
// console.log(nullUser(new UserService()).getUsersInDatabase());