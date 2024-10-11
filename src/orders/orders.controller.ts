import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './create-order.dto';
import { UpdateOrderDto } from './update-order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
        return this.ordersService.create(createOrderDto);
    }

    @Get()
    async findAll() {
        return this.ordersService.findAll();
    }

    @Patch(':id/status')
    async updateStatus(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto) {
        return this.ordersService.updateStatus(id, updateOrderDto);
    }
}
