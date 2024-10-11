import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.orders)
    user!: User;

    @ManyToOne(() => Product, product => product.orders)
    product!: Product;

    @Column('int', { default: 1 })
    quantity: number = 1;

    @Column({ default: 'created' })
    status: string = 'created';
}
