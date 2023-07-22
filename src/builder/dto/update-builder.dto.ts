import { ApiProperty } from "@nestjs/swagger";

export class UpdateBuilderDto {
  @ApiProperty({
    example: 'full_name1',
    description: 'builder full_name update uchun',
  })
  full_name?: string;

  @ApiProperty({
    example: '7/22/2023',
    description: "builder tug'ulgan sanasini update uchun",
  })
  birth_day?: Date;

  @ApiProperty({
    example: '2100$',
    description: 'salary update uchun',
  })
  salary?: number;

  @ApiProperty({
    example: 2,
    description: 'builder company_id update uchun',
  })
  company_id?: number;
}
