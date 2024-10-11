import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        await this.usersRepository.update(id, updateUserDto);
        const user = await this.usersRepository.findOne({ where: { id } });
        
        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user; // User will not be null here
    }

    async remove(id: string): Promise<void> {
        const result = await this.usersRepository.delete(id);
        
        if (result.affected === 0) {
            throw new NotFoundException('User not found');
        }
    }

    async findOne(email: string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ where: { email } });
        
        if (!user) {
            return undefined; // Explicitly return undefined if user not found
        }

        return user; // Return the user if found
    }
}
