import { FfmpegExecutor } from "./commands/ffmpeg/ffmpeg.executer.js";
import { PromptService } from "./core/prompt/prompt.servise.js";
import { ConsoleLogger } from "./out/console-logger/console-logger.js";

export class App{
    async run(){
        new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
    }
}

const app = new App();
app.run();