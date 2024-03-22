// interface IUserService{
//     users: number;
//     getUsersInDatabase(): number;
// }

// @setUsersAdvanced(10000)
// @setUsers(2)
// class UserService implements IUserService{
//     users: number;
//     getUsersInDatabase (): number {
//         return this.users;
//     }
// }


// function nullUser(target: Function){
//     target.prototype.users = 0;
// }

// function threeUserAdvanced<T extends {new(...args: any[]): {}}>(constructor: T){
//     return class extends constructor{
//         users = 3;
//     }
// }

// function setUsers(usersCount: number){
//     return (target: Function) => {
//         target.prototype.users = usersCount;
//     }
// }

// function setUsersAdvanced(usersCount: number){
//     return <T extends {new(...args: any[]): {}}>(constructor: T) => {
//         return class extends constructor{
//             users = usersCount;
//         }
//     }
// }

// console.log(new UserService().getUsersInDatabase());