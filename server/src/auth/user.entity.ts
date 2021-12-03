import { PrimeTime } from 'src/primetime/dto/primetime.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToMany(_type => PrimeTime, (primetime) => primetime.user, { eager: true })
    primetimes: PrimeTime[];
}