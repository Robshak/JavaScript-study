// const a: number = Math.random() > 0.5 ? 1 : 0;

// interface HTTPresponse<T extends 'success' | 'failed'>{
//     code: number;
//     data: T extends 'success' ? string : Error;
//     data2: T extends 'success' ? string : number;
// }

// const err: HTTPresponse<'success'>={
//     code: 200,
//     data: 'done',
//     data2: 'done'
// }

// const err2: HTTPresponse<'failed'>={
//     code: 200,
//     data: new Error(),
//     data2: 5
// }