import { ApiProperty } from "@nestjs/swagger";

export class CreateMachine_driverDto {
  @ApiProperty({
    example: 'machineId = 1',
    description: 'Machine-drive yaratish uchun machine id',
  })
  machineId: number;

  @ApiProperty({
    example: 'driverId = 1',
    description: 'Machine-drive yaratish uchun drive id',
  })
  driverId: number;
}
