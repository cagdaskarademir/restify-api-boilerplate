import { RequestHandler } from "restify";

export interface IHttpServer {
    get(url: string, handler: RequestHandler): void;
    put(url: string, handler: RequestHandler): void;
    post(url: string, handler: RequestHandler): void;
    delete(url: string, handler: RequestHandler): void;
}
