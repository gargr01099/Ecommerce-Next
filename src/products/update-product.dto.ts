import { IsOptional, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
    @IsOptional()
    @IsString()
    name?: string; // Optional field for the product name

    @IsOptional()
    @IsString()
    description?: string; // Optional field for the product description

    @IsOptional()
    @IsNumber()
    price?: number; // Optional field for the product price

    @IsOptional()
    @IsNumber()
    stock?: number; // Optional field for the product stock availability
}
