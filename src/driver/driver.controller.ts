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

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post('create')
  async createDriver(@Body() createDriverDto: CreateDriverDto) {
    const driver = await this.driverService.createDriver(createDriverDto);
    return driver;
  }

  @Get('all')
  async getAllDriver(): Promise<Driver[]> {
    return this.driverService.getAllDriver();
  }

  @Get(':id')
  async getDriverById(@Param('id') id: string): Promise<Driver> {
    return this.driverService.getDriverById(+id);
  }

  // @Get(':name')
  // async getDriverByName(@Param('name') name: string): Promise<Driver> {
  //   return this.driverService.getDriverById(name);
  // }

  @Delete(':id')
  async deleteDriverById(@Param('id') id: string): Promise<number> {
    return this.driverService.deleteDriverById(+id);
  }

  @Put(':id')
  async updateDriver(
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ): Promise<Driver> {
    return this.driverService.updateDriver(+id, updateDriverDto);
  }
}
