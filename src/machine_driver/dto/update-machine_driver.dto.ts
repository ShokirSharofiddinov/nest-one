import { ApiProperty } from "@nestjs/swagger";

export class UpdateMachine_driverDto {
  @ApiProperty({
    example: 'machineId = 1',
    description: 'Machine-drive update qilish uchun machine id',
  })
  machineId?: number;

  @ApiProperty({
    example: 'driverId = 1',
    description: 'Machine-drive update qilish uchun machine id',
  })
  driverId?: number;
}
