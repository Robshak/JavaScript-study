// optional

// interface User {
//     login: string,
//     password?: string
// }

// const user: User = {
//     login: 'name',
// }

// function multyply(first: number, second?: number): number{
//     if(!second){
//         return first * first;
//     }
//     return first * second;
// }

// console.log(multyply(5));

// interface UserPro{
//     login: string,
//     password?: {
//         type: 'primary' | 'secondary'
//     }
// }

// function testPass(user: UserPro){
//     const t = user.password?.type;
//     console.log(t);
// }

// const proUser: UserPro = {
//     login: 'Bob',
// }

// testPass(proUser);

// Task________________________________________________________________________________________________________

// interface Payment{
//     sum: number,
//     from: number,
//     to: number
// };

// interface Request extends Payment{};

// enum PaymentStatus{
//     SUCCESS = 'success',
//     FAIL = 'fail'
// }

// interface DataSuccess extends Payment{
//     databaseId: number
// }

// interface DataFail{
//     errorMessage: string,
//     errorCode: number
// }

// interface SuccessStatus{
//     status: PaymentStatus.SUCCESS,
//     data: DataSuccess
// };

// interface FailStatus{
//     status: PaymentStatus.FAIL,
//     data: DataFail
// };

// function isGood(op: SuccessStatus | FailStatus): op is SuccessStatus{
//     return op.status === PaymentStatus.SUCCESS;
// }