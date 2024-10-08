import { Injectable, NotFoundException } from '@nestjs/common';
import { Bike } from '../entities/bike.entity';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { UpdateBikeDto } from '../dto/update-bike.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


/**
 * Service handling logic for bike-related operations
 */

@Injectable()
export class BikesService {
    constructor(
        @InjectRepository(Bike)
        private bikesRepository: Repository<Bike>,
    ) {}

    async findAll(): Promise<Bike[]> {
        return this.bikesRepository.find();
    }

    async create(createBikeDto: CreateBikeDto): Promise<Bike> {
        const bike = this.bikesRepository.create(createBikeDto);
        return this.bikesRepository.save(bike);
    }

    async update(id: string, updateBikeDto: UpdateBikeDto): Promise<Bike> {
        const bike = await this.bikesRepository.findOne({where:{id}});
        const car = await this.bikesRepository.findOne
        if (!bike) {
            throw new NotFoundException(`Bike with ID ${id} not found`);
        }
        Object.assign(bike, updateBikeDto);
        return this.bikesRepository.save(bike);
    }

    async remove(id: string): Promise<void> {
        const bike = await this.bikesRepository.findOne({where:{id}});
        if (!bike) {
            throw new NotFoundException(`Bike with ID ${id} not found`);
        }
        await this.bikesRepository.remove(bike);
    }
}