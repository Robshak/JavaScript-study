// interface IForm{
//     name: string;
//     password: string;
// }

// const form: IForm = {
//     name: 'Bob',
//     password: 'sdfg'
// }

// type Validation<T> = {
//     +readonly [K in keyof T]: {
//         isValid: true;
//     } | {
//         isValid: false;
//         errorMessage: string;
//     } ;
// }

// type test = Validation<IForm>;