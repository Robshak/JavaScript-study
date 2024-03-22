// interface IUser{
//     name: string;
//     age: number;
// }

// type KeysOfUser = keyof IUser;

// const key: KeysOfUser = 'name';

// function getValue<T, K extends keyof T>(obj: T, key: K){
//     return obj[key];
// }

// const user:IUser = {
//     name: 'Bob',
//     age: 12
// };

// const testObj = {
//     sadf: 1,
//     gfds: 'vdf'
// }

// type TestType = keyof typeof testObj;
// const testValue: TestType = 'sadf';

// const userName = getValue(testObj, 'gfds');
// console.log(userName);