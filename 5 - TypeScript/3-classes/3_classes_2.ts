// abstract class Logger{
//     abstract log(message: any):void;

//     printDate(date: Date){
//         this.log(date.toString());
//     }
// }

// class Logger2 extends Logger{
//     log ( message: any ): void {
//         console.log(message);
//     }

//     logWithDate(message: any):void {
//         this.printDate(new Date());
//         this.log(message);
//     }
// }

// const obj = new Logger2();

// obj.logWithDate('sakljd');