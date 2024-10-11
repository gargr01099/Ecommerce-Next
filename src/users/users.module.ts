import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity'; // Import the User entity
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User])], // Add the User entity here
    providers: [UsersService],
    controllers: [UsersController],
    exports: [UsersService], // Export UsersService
})
export class UsersModule {}
