// Type Guard

// interface User{
//     name: string,
//     email: string,
//     login: string
// }

// const user:User = {
//     name: 'Bob',
//     email: 'asdg',
//     login: 'Robshak'
// }

// interface Admin{
//     name: string,
//     role: number
// }

// function logId(id: string | number){
//     if(isString(id)){
//         console.log(id);
//     }
//     else{
//         console.log(id);
//     }
// }

// function isString(x: string | number): x is string{
//     return typeof x === 'string';
// }

// function setRolo(user: User | Admin){
//     if(isAdmin(user)){
//         user.role = 0;
//     }
// }

// function isAdmin(user: User | Admin): user is Admin{
//     return 'role' in user;
// }