import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { Driver } from './models/driver.model';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Driver')
@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @ApiOperation({ summary: 'driver yearatish uchun' })
  @ApiResponse({ status: 200, description: 'New driver' })
  @Post('create')
  async createDriver(@Body() createDriverDto: CreateDriverDto) {
    const driver = await this.driverService.createDriver(createDriverDto);
    return driver;
  }

  @ApiOperation({ summary: "driverlarni ko'rish uchun" })
  @ApiResponse({ status: 200, description: 'get all driverses' })
  @Get('all')
  async getAllDriver(): Promise<Driver[]> {
    return this.driverService.getAllDriver();
  }

  @ApiOperation({ summary: "driver ni id bo'yicha olish" })
  @ApiResponse({ status: 200, description: 'get driver by id' })
  @Get(':id')
  async getDriverById(@Param('id') id: string): Promise<Driver> {
    return this.driverService.getDriverById(+id);
  }

  @ApiOperation({ summary: 'driver delete qilish uchun' })
  @ApiResponse({ status: 200, description: 'delete driver' })
  @Delete(':id')
  async deleteDriverById(@Param('id') id: string): Promise<number> {
    return this.driverService.deleteDriverById(+id);
  }

  @ApiOperation({ summary: 'driver update qilish uchun' })
  @ApiResponse({ status: 200, description: 'update driver' })
  @Put(':id')
  async updateDriver(
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    return this.driverService.updateDriver(+id, updateDriverDto);
  }
}
