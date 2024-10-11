import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    username?: string; // Optional field for the user's username

    @IsOptional()
    @IsEmail()
    email?: string; // Optional field for the user's email address

    @IsOptional()
    @IsString()
    password?: string; // Optional field for the user's password (if they want to update it)
}
