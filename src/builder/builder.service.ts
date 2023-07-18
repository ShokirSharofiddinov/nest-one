import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Injectable()
export class BuilderService {
  constructor(@InjectModel(Builder) private builderRepo: typeof Builder) {}

  async createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder> {
    const builder = await this.builderRepo.create(createBuilderDto);
    return builder;
  }

  async getAllBuilder(): Promise<Builder[]> {
    const companies = await this.builderRepo.findAll();
    return companies;
  }

  async getBuilderById(id: number): Promise<Builder> {
    const builder = await this.builderRepo.findOne({ where: { id } });
    // const builder = await this.builderRepo.findByPk(id);
    return builder;
  }

  async getBuilderByName(full_name: string): Promise<Builder> {
    const builder = await this.builderRepo.findOne({ where: { full_name } });
    return builder;
  }

  async deleteBuilderById(id: number): Promise<number> {
    return this.builderRepo.destroy({ where: { id } });
  }

  async updateBuilder(
    id: number,
    updateBuilderDto: UpdateBuilderDto,
  ): Promise<Builder> {
    const builder = await this.builderRepo.update(updateBuilderDto, {
      where: { id },
      returning: true,
    });

    return builder[1][0].dataValues;
  }
}
