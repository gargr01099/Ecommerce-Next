import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  userId: string = ''; // Default value

  @IsNotEmpty()
  productIds: string[] = []; // Default value

  @IsNotEmpty()
  totalPrice: number = 0; // Default value

  @IsNotEmpty()
  status: string = 'created'; // Default value
}
