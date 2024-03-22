// interface IUserService{
//     users: number;
//     getUsersInDatabase(): number;
// }

// class UserService implements IUserService{
//     users: number = 20;

//     @Catch()
//     getUsersInDatabase (): number {
//         throw new Error('BOOM!');
//     }
// }

// function Catch(rethrow: boolean = false){
//     return (
//         target: Object,
//         propertyKey: string | symbol,
//         descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
//     ) => {
//         console.log(target);
//         const method = descriptor.value;
//         descriptor.value = async (...args: any[]) => {
//             try{
//                 return await method?.apply(target, args);
//             }
//             catch (e){
//                 if(e instanceof Error){
//                     console.log(e.message);
//                     if(rethrow){
//                         throw e;
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(new UserService().getUsersInDatabase());