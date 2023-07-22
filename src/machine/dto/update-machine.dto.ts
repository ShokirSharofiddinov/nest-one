import { ApiProperty } from "@nestjs/swagger";

export class UpdateMachineDto {
  @ApiProperty({
    example: 'machine2',
    description: 'machinga name update qilish uchun name',
  })
  name?: string;

  @ApiProperty({
    example: '2',
    description: 'machinga company_id update qilish uchun company_id',
  })
  company_id?: number;
}
