import { ContactModel } from "../models/contact.model";
import { DatabaseProvider } from "../server/database";
import { DeleteResult } from "typeorm";

export class ContactService {
    public async getContact(id: number): Promise<ContactModel> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(ContactModel).findOne(id);
    }

    public async getContancts(): Promise<ContactModel[]> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(ContactModel).find();
    }
    public async create(contact: ContactModel): Promise<ContactModel> {
        const connection = await DatabaseProvider.getConnection();
        return await connection.getRepository(ContactModel).save(contact);
    }

    public async update(contact: ContactModel): Promise<ContactModel> {
        const connection = await DatabaseProvider.getConnection();
        const entity = await connection.getRepository(ContactModel).findOne(contact.id);
        entity.name = contact.name;
        entity.contactNo = contact.contactNo;
        entity.emailAddress = contact.emailAddress;

        return await connection.getRepository(ContactModel).save(entity);
    }

    /**
     * TODO : check the typeORM API
     * @param id
     */
    public async delete(id: number): Promise<DeleteResult> {
        const connection = await DatabaseProvider.getConnection();
        const entity = await connection.getRepository(ContactModel).findOne(id);
        return await connection.getRepository(ContactModel).delete(entity);
    }
}

export const contactService = new ContactService();
