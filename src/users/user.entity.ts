import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../orders/order.entity';
import { Review } from '../reviews/review.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    name!: string;

    @OneToMany(() => Order, order => order.user)
    orders!: Order[];

    @OneToMany(() => Review, review => review.user)
    reviews!: Review[];
}
