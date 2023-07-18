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

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) {}

  @Post('create')
  async createMachine(@Body() createMachineDto: CreateMachineDto) {
    const machine = await this.machineService.createMachine(createMachineDto);
    return machine;
  }

  @Get('all')
  async getAllMachine(): Promise<Machine[]> {
    return this.machineService.getAllMachine();
  }

  @Get(':id')
  async getMachineById(@Param('id') id: string): Promise<Machine> {
    return this.machineService.getMachineById(+id);
  }

  // @Get(':name')
  // async getMachineByName(@Param('name') name: string): Promise<Machine> {
  //   return this.machineService.getMachineById(name);
  // }

  @Delete(':id')
  async deleteMachineById(@Param('id') id: string): Promise<number> {
    return this.machineService.deleteMachineById(+id);
  }

  @Put(':id')
  async updateMachine(
    @Param('id') id: string,
    @Body() updateMachineDto: UpdateMachineDto,
  ): Promise<Machine> {
    return this.machineService.updateMachine(+id, updateMachineDto);
  }
}
