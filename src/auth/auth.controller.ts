import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)  // Using the LocalAuthGuard to protect this route
    @Post('login')
    async login(@Body() loginDto: { email: string; password: string }) {
        return this.authService.login(loginDto);  // Calls the AuthService to handle login logic
    }
}
