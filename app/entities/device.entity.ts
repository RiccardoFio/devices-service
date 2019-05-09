import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import slugify from 'slugify';

@Entity('devices')
export class Device {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public name: string;

    @Column({ unique: true})
    public slug: string;

    @Column({ unique: true})
    public macaddress: string;

    @Column()
    public description: string;

    
    constructor(name: string, macaddress: string, description: string){
        this.name = name;
        this.slug = slugify(this.name+this.id);
        this.macaddress = macaddress;
        this.description = description;
    }

}