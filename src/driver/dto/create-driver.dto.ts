import { ApiProperty } from "@nestjs/swagger";

export class CreateDriverDto {
  @ApiProperty({
    example: 'driver1',
    description: 'driver first_name berish uchun',
  })
  first_name: string;
  @ApiProperty({
    example: 'druver11',
    description: 'driver last_name berish uchun',
  })
  last_name: string;
}
