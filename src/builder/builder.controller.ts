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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Builder')
@Controller('builder')
export class BuilderController {
  constructor(private readonly builderService: BuilderService) {}

  @ApiOperation({ summary: 'builder yearatish uchun' })
  @ApiResponse({ status: 200, description: 'New builder' })
  @Post('create')
  async createBuilder(@Body() createBuilderDto: CreateBuilderDto) {
    const builder = await this.builderService.createBuilder(createBuilderDto);
    return builder;
  }

  @ApiOperation({ summary: "Builderlarni ko'rish" })
  @ApiResponse({ status: 200, description: 'get all builder' })
  @Get('all')
  async getAllBuilder(): Promise<Builder[]> {
    return this.builderService.getAllBuilder();
  }

  @ApiOperation({ summary: "builder id bo'yicha olish" })
  @ApiResponse({ status: 200, description: 'get builder by id' })
  @Get(':id')
  async getBuilderById(@Param('id') id: string): Promise<Builder> {
    return this.builderService.getBuilderById(+id);
  }

  @ApiOperation({ summary: 'builder delete uchun' })
  @ApiResponse({ status: 200, description: 'delete builder' })
  @Delete(':id')
  async deleteBuilderById(@Param('id') id: string): Promise<number> {
    return this.builderService.deleteBuilderById(+id);
  }

  @ApiOperation({ summary: 'builder update uchun' })
  @ApiResponse({ status: 200, description: 'update builder' })
  @Put(':id')
  async updateBuilder(
    @Param('id') id: string,
    @Body() updateBuilderDto: UpdateBuilderDto,
  ): Promise<Builder> {
    return this.builderService.updateBuilder(+id, updateBuilderDto);
  }
}
