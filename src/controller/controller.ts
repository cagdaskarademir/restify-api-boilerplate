import { IHttpServer } from "../server/httpServer";
export interface IControllers {
    initialize(httpServer: IHttpServer): void;
}
