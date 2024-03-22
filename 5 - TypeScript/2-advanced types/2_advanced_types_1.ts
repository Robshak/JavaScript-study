// Union

// function logId(id: string | number | boolean){
//     if(typeof id === 'string'){
//         console.log(id.toLowerCase);
//     }
//     else{
//         console.log(id);
//     }
// }

// function logError(err: string | string[]){
//     if(Array.isArray(err)){
//         console.log(err);
//     }
//     else{
//         console.log(err);
//     }
// }

// function logObj(obj: {a:number} | {b:number}){
//     if('a' in obj){
//         console.log(obj);
//     }
//     else{
//         console.log(obj);
//     }
// }

// Literal Types________________________________________________________________________________________________________

// function fetchWithAuth(url: string, method: 'post' | 'get'){
//     console.log(method);
// }

// fetchWithAuth('edrfg', 'get');

// let method: string = 'post';

// fetchWithAuth('s', method as 'post');

// Type Aliases - лучше юзать для простых типов________________________________________________________________________________________________________

// type httpMethod = 'post' | 'get';

// function fetchWithAuth2(url: string, method: httpMethod){
//     console.log(method);
// }

// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// }

// type Role = {
//     id: number
// }

// type UserWithRole = User & Role;

// let myUser: UserWithRole = {
//     name: 'asd',
//     age: 33,
//     skills: ['1', '2'],
//     id: 1
// };

// Interfaces - лучше юзать для объектов________________________________________________________________________________________________________

// interface User2 {
//     name: string,
//     age: number,
//     skills: string[]

//     log: (id:number) => string;
// }

// interface UserWithRole2 extends User2 {
//     roleId: number
// }

// let myUser2: UserWithRole2 = {
//     name: 'asd',
//     age: 33,
//     skills: ['1', '2'],
//     roleId: 2,

//     log(id){
//         return 'qe';
//     }
// }

// interface UserDict { // у интерфейса не ограниченное число свойств с ключом - строкой, а значением - user
//     [index: string]: User
// }