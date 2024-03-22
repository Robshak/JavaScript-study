// interface Data{
//     group: number;
//     name: string;
// }

// const data: Data[] = [
//     {group: 1, name: 'a'},
//     {group: 1, name: 'b'},
//     {group: 2, name: 'b'},
// ];

// function toString<T>(val: T):string {
//     if(typeof val == 'string'){
//         return val;
//     }
//     const res = JSON.stringify(val);
//     return res;
// }

// type MyKeyType = number | string | symbol;

// function group<T extends Record<MyKeyType, any>, K extends keyof T>(objArray: T[], key: K){
//     const tmpData: Record<string, T[]> = {};
//     for(const obj of objArray){
//         tmpData[toString(obj[key])] = [];
//     }
//     for(const obj of objArray){
//         tmpData[toString(obj[key])].push(obj);
//     }

//     return tmpData;
// }

// console.log(group(data, 'group'));