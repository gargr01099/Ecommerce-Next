import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username!: string; // Username should be provided by the request

  @IsNotEmpty()
  @IsEmail()
  email!: string; // Email should be provided by the request

  @IsNotEmpty()
  @IsString()
  password!: string; // Password should be provided by the request
}
