import { IHttpServer } from "./httpServer";
import { RequestHandler, Server } from "restify";
import * as restify from "restify";
import { CONTROLLERS } from "../controller";

export class ApiServer implements IHttpServer {
    private restify: Server;

    public get(url: string, requestHandler: RequestHandler): void {
        this.addRoute("get", url, requestHandler);
    }

    public post(url: string, requestHandler: RequestHandler): void {
        this.addRoute("post", url, requestHandler);
    }

    public put(url: string, requestHandler: RequestHandler): void {
        this.addRoute("put", url, requestHandler);
    }

    public delete(url: string, requestHandler: RequestHandler): void {
        this.addRoute("del", url, requestHandler);
    }

    private addRoute(method: "get" | "post" | "put" | "del", url: string, requestHandler: RequestHandler): void {
        this.restify[method](url, async (req, res, next) => {
            try {
                await requestHandler(req, res, next);
            } catch (error) {
                console.log(error); // tslint:disable-line
                res.send(5000, error);
            }
        });
    }

    public startServer(port: number): void { // tslint:disable-line
        this.restify = restify.createServer();
        this.restify.use(restify.plugins.bodyParser());
        this.restify.use(restify.plugins.queryParser());
        CONTROLLERS.forEach((controller) => controller.initialize(this));
        this.restify.listen(port, () => console.log(`Server is running at port ${port}`)); // tslint:disable-line
    }
}
