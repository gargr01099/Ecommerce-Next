import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './create-review.dto';
import { Product } from '../products/product.entity';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Review)
        private reviewsRepository: Repository<Review>,
        
        @InjectRepository(Product)
        private productsRepository: Repository<Product>, // Inject the Product repository to fetch the product
    ) {}

    async create(createReviewDto: CreateReviewDto): Promise<Review> {
        // Fetch the product using productId from the DTO
        const product = await this.productsRepository.findOne({ where: { id: createReviewDto.productId } });
        
        if (!product) {
            throw new NotFoundException('Product not found');
        }

        // Create the review with product relationship
        const review = this.reviewsRepository.create({
            comment: createReviewDto.comment,  // Use 'content' instead of 'comment'
            rating: createReviewDto.rating,
            product: product,  // Assign the product entity here
        });

        return this.reviewsRepository.save(review);
    }

    async findReviewsByProduct(productId: string): Promise<Review[]> {
        const reviews = await this.reviewsRepository.find({
            where: {
                product: { id: parseInt(productId) }
            },
            relations: ['product']
        });
        
        if (!reviews || reviews.length === 0) {
            throw new NotFoundException('No reviews found for this product');
        }

        return reviews;
    }
}
