// function toString<T>(val: T):string|undefined {
//     if(typeof val == 'string'){
//         return val;
//     }
//     const res = JSON.stringify(val);
//     return res;
// }

// console.log(toString([1, 2, 3]));

// interface ILogLine<T>{
//     timeStamp: Date;
//     data: T;
// }

// const logLine: ILogLine<{a: number}> = {
//     timeStamp: new Date(),
//     data: {
//         a: 1
//     }
// }