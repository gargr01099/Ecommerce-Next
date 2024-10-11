import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsNumber()
  productId!: number;  // Make sure this is included in your DTO

  @IsNotEmpty()
  @IsString()
  comment!: string;  // Also ensure this matches your entity

  @IsNotEmpty()
  @IsNumber()
  rating!: number;
}
