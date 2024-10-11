import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module'; // Import the UsersModule
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UsersModule, // Ensure UsersModule is imported here
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'defaultSecret', // Ensure your JWT secret is set
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
