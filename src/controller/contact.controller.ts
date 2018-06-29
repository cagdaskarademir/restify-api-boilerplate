import { Controllers } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Request, Response } from "restify";

export class ContactController implements Controllers {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/contact', this.list.bind(this));
        httpServer.post('/contact', this.create.bind(this));
        httpServer.put('/contact', this.update.bind(this));
        httpServer.delete('/contact', this.delete.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {
        res.send(200, "asdasdsa");
    }
    private async create(req: Request, res: Response): Promise<void> {
    }
    private async update(req: Request, res: Response): Promise<void> {
    }
    private async delete(req: Request, res: Response): Promise<void> {
    }

}