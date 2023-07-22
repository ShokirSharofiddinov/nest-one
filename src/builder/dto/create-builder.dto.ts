import { ApiProperty } from "@nestjs/swagger";

export class CreateBuilderDto {
  @ApiProperty({
    example: 'full_name1',
    description: 'builder full_name uchun',
  })
  full_name: string;

  @ApiProperty({
    example: '7/22/2023',
    description: 'builder birth day uchun',
  })
  birth_day: Date;

  @ApiProperty({
    example: '2000$',
    description: 'builer salary uchun',
  })
  salary: number;

  @ApiProperty({
    example: 1,
    description: 'builder company da ishlash id uchun',
  })
  company_id: number;
}
