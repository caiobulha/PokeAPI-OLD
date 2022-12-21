import { AppService } from './app.service';
export declare class DefaultController {
    redirect(res: any): void;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getCaio(): any;
    documentation(): string;
}
