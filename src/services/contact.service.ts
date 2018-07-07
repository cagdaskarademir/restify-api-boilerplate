import { ContactModel } from "../models/contact.model";
import { DatabaseProvider } from "../server/database";

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
        console.log("Created account for -->" + contact.name)
        return await connection.getRepository(ContactModel).save(contact);
    }

    public async update(contact: ContactModel): Promise<ContactModel> {
        const connection = await DatabaseProvider.getConnection();
        let entity = await connection.getRepository(ContactModel).findOne(contact.id);
        entity.name = contact.name;
        entity.contactNo = contact.contactNo;
        entity.emailAddress = contact.emailAddress;

        return await connection.getRepository(ContactModel).save(entity);
    }

    /**
     * TODO : check the typeORM API
     * @param id 
     */
    public async delete(id: Number): Promise<void> {

    }
}

export const contactService = new ContactService();