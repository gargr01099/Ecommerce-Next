import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderDto {
    @IsNotEmpty()
    @IsString()
    status!: string; // New status for the order (e.g., 'shipped', 'delivered')
}
