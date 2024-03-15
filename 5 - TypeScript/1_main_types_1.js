"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Bob',
    surname: 'Shak',
    city: 'SPB',
    age: 123
};
console.log(getFullName(user));
// let info: {
//     officeId: number;
//     isOpened: boolean;
//     contacts:{
//         phone: string;
//         email: string;
//         address:{
//             city: string
//         }
//     }
// }
const skills = ['Dev', 'Devops'];
const arr = [1, 'Dev'];
arr.push('test');
for (const i of arr) {
    console.log(i);
}
