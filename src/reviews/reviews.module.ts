import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { Review } from './review.entity';
import { ProductsModule } from '../products/products.module'; // Import ProductsModule

@Module({
    imports: [
        TypeOrmModule.forFeature([Review]), // Register the Review entity
        ProductsModule, // Import ProductsModule
    ],
    controllers: [ReviewsController],
    providers: [ReviewsService],
})
export class ReviewsModule {}
