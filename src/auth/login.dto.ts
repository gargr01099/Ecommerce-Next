import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string = '';  // Default value

  @IsNotEmpty()
  @IsString()
  password: string = '';  // Default value
}
