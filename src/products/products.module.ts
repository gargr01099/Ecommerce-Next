import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]), // Register the Product entity
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService], // Export ProductsService if needed
})
export class ProductsModule {}
