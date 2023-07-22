import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { Machine } from './models/machine.model';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Machine')
@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @ApiOperation({ summary: 'machine yearatish uchun' })
  @ApiResponse({ status: 200, description: 'New machine' })
  @Post('create')
  async createMachine(@Body() createMachineDto: CreateMachineDto) {
    const machine = await this.machineService.createMachine(createMachineDto);
    return machine;
  }

  @ApiOperation({ summary: 'machinelarni olish' })
  @ApiResponse({ status: 200, description: 'List of machine', type: [Machine] })
  @Get('all')
  async getAllMachine(): Promise<Machine[]> {
    return this.machineService.getAllMachine();
  }

  @ApiOperation({ summary: 'machineni id bilan olish' })
  @ApiResponse({ status: 200, description: 'machine getById', type: [Machine] })
  @Get(':id')
  async getMachineById(@Param('id') id: string): Promise<Machine> {
    return this.machineService.getMachineById(+id);
  }

  @ApiOperation({ summary: 'machine delete qilish' })
  @ApiResponse({ status: 200, description: 'machine o\'chirish', type: [Machine] })
  @Delete(':id')
  async deleteMachineById(@Param('id') id: string): Promise<number> {
    return this.machineService.deleteMachineById(+id);
  }

  @ApiOperation({ summary: 'machine update qilish' })
  @ApiResponse({ status: 200, description: 'machine update qilish', type: [Machine] })
  @Put(':id')
  async updateMachine(
    @Param('id') id: string,
    @Body() updateMachineDto: UpdateMachineDto,
  ): Promise<Machine> {
    return this.machineService.updateMachine(+id, updateMachineDto);
  }
}
