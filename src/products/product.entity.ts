import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Review } from '../reviews/review.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column('text')
    description!: string;

    @Column('decimal')
    price!: number;

    @Column()
    stock!: number;

    @OneToMany(() => Review, review => review.product)
    reviews!: Review[];
    orders: any;
}
