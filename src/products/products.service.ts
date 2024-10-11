import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './create-product.dto';
import { UpdateProductDto } from './update-product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const product = this.productsRepository.create(createProductDto);
        return this.productsRepository.save(product);
    }

    async findAll(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
        // Convert id to number
        const numericId = parseInt(id, 10);
        await this.productsRepository.update(numericId, updateProductDto);
        const updatedProduct = await this.productsRepository.findOne({ where: { id: numericId } });
        if (!updatedProduct) {
            throw new Error('Product not found');
        }
        return updatedProduct;
    }

    async remove(id: string): Promise<void> {
        const numericId = parseInt(id, 10);
        await this.productsRepository.delete(numericId);
    }
}
