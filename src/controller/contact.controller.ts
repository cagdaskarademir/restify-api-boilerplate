import { Controllers } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Request, Response } from "restify";
import { ContactService, contactService } from "../services/contact.service";

export class ContactController implements Controllers {
    public initialize(httpServer: HttpServer): void {
        httpServer.get('/contact', this.list.bind(this));
        httpServer.get('/contact/:id', this.getContactById.bind(this));

        httpServer.post('/contact', this.create.bind(this));
        httpServer.put('/contact', this.update.bind(this));
        httpServer.delete('/contact', this.delete.bind(this));
    }

    public async list(req: Request, res: Response): Promise<void> {
        res.send(await contactService.getContancts());
    }
    public async getContactById(req: Request, res: Response): Promise<void> {
        const contact = await contactService.getContact(req.params.id);
        res.send(contact ? 200 : 404, contact);
    }
    public async create(req: Request, res: Response): Promise<void> {
        const contact = await contactService.create(req.body);
        res.send(contact ? 200 : 404, contact);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const contact = await contactService.update(req.body);
        res.send(contact ? 200 : 404, contact);
    }
    public async delete(req: Request, res: Response): Promise<void> {
    }

}