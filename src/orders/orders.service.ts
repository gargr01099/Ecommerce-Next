import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './create-order.dto';
import { UpdateOrderDto } from './update-order.dto';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private ordersRepository: Repository<Order>,
    ) {}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const order = this.ordersRepository.create(createOrderDto);
        return this.ordersRepository.save(order);
    }

    async findAll(): Promise<Order[]> {
        return this.ordersRepository.find();
    }

    async updateStatus(id: number, updateOrderDto: UpdateOrderDto): Promise<Order | null> {
        await this.ordersRepository.update(id, updateOrderDto);
        return this.ordersRepository.findOne({ where: { id } });
    }
}
