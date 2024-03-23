import { IStreamLogger } from "../../core/handlers/stream-logger.interface.js";

export class ConsoleLogger implements IStreamLogger{
    private static logger: ConsoleLogger;
    public static getInstance(){
        if(!ConsoleLogger.logger){
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }

    log ( logMessage: string ): void {
        console.log(logMessage);
    }
    error ( errorMessage: string ): void {
        console.error(errorMessage);
    }
    end (): void {
        console.log('Convert is done!');
    }
}