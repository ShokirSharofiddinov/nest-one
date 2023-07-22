import { ApiProperty } from "@nestjs/swagger";

export class UpdateCompanyDto {
  @ApiProperty({
    example: 'Company2',
    description: 'company name update qilish uchun',
  })
  name?: string;

  @ApiProperty({
    example: 'address2',
    description: 'address update qilish uchun',
  })
  address?: string;

  @ApiProperty({
    example: '99 999 99 91',
    description: 'phone number update qilish uchun',
  })
  phone?: string;
}
