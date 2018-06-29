import { HttpServer } from '../server/httpServer';
export interface Controllers {
    initialize(httpServer: HttpServer): void;
}