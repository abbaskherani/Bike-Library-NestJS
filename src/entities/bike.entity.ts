import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


/**
 * This class is used to define the structure of a bike object
 * that will be stored in the database.
 */
@Entity()
export class Bike {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    type: string;
}