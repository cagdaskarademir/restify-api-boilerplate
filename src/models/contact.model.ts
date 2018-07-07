import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ContactModel {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public contactNo: string;

    @Column()
    public emailAddress: string;
    
}