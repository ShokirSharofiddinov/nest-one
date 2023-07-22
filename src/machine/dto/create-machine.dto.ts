import { ApiProperty } from "@nestjs/swagger";

export class CreateMachineDto {
  @ApiProperty({
    example: 'machine1',
    description: 'machinga name berish uchun',
  })
  name: string;

  @ApiProperty({
    example: '1',
    description: 'machinga compenyId berish uchun',
  })
  company_id: number;
}
