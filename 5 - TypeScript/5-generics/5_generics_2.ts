// function sortSomething<T extends {id: number}>(data: Array<T>, order: 'normal' | 'reverse' = 'normal'): Array<T>{
//     if(order == 'normal'){
//         return data.sort((a, b) => a.id - b.id);
//     }
//     else{
//         return data.sort((a, b) => b.id - a.id);
//     }
// }

// const data = [
//     {id: 2, name: 'Vasya'},
//     {id: 3, name: 'Peter'},
//     {id: 1, name: 'Nadya'}
// ];

// console.log(sortSomething(data));