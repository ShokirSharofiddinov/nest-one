import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BuilderService } from './builder.service';
import { CreateBuilderDto } from './dto/create-builder.dto';
import { Builder } from './models/builder.model';
import { UpdateBuilderDto } from './dto/update-builder.dto';

@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @Post('create')
  async createBuilder(@Body() createBuilderDto: CreateBuilderDto) {
    const builder = await this.builderService.createBuilder(createBuilderDto);
    return builder;
  }

  @Get('all')
  async getAllBuilder(): Promise<Builder[]> {
    return this.builderService.getAllBuilder();
  }

  @Get(':id')
  async getBuilderById(@Param('id') id: string): Promise<Builder> {
    return this.builderService.getBuilderById(+id);
  }

  // @Get(':name')
  // async getBuilderByName(@Param('name') name: string): Promise<Builder> {
  //   return this.builderService.getBuilderById(name);
  // }

  @Delete(':id')
  async deleteBuilderById(@Param('id') id: string): Promise<number> {
    return this.builderService.deleteBuilderById(+id);
  }

  @Put(':id')
  async updateBuilder(
    @Param('id') id: string,
    @Body() updateBuilderDto: UpdateBuilderDto,
  ): Promise<Builder> {
    return this.builderService.updateBuilder(+id, updateBuilderDto);
  }
}
