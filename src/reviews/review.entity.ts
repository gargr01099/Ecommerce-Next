import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, user => user.reviews)
    user!: User;

    @ManyToOne(() => Product, product => product.reviews)
    product!: Product;

    @Column('text')
    comment!: string;  // Change 'comment' to 'content' for consistency with DTO

    @Column('int')
    rating!: number;   // Add rating field based on the CreateReviewDto
}
