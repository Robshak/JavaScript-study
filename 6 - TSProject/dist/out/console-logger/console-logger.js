"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    static getInstance() {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }
    log(logMessage) {
        console.log(logMessage);
    }
    error(errorMessage) {
        console.error(errorMessage);
    }
    end() {
        console.log('Convert is done!');
    }
}
exports.ConsoleLogger = ConsoleLogger;
