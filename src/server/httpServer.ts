import { RequestHandler } from "restify";

export interface HttpServer {
    get(url: String, handler: RequestHandler): void;
    put(url: String, handler: RequestHandler): void;
    post(url: String, handler: RequestHandler): void;
    delete(url: String, handler: RequestHandler): void;
}
