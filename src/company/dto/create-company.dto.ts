import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
  @ApiProperty({
    example: 'company1',
    description: 'company name berish uchun',
  })
  name: string;

  @ApiProperty({
    example: 'adress1',
    description: 'adress berish uchun',
  })
  address: string;

  @ApiProperty({
    example: '99 999 99 99',
    description: 'phone number berish uchun',
  })
  phone: string;
}
