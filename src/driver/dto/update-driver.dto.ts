import { ApiProperty } from "@nestjs/swagger";

export class UpdateDriverDto {
  @ApiProperty({
    example: 'driver2',
    description: 'driver first_name update uchun',
  })
  first_name: string;

  @ApiProperty({
    example: 'driver22',
    description: 'driver last_name update uchun',
  })
  last_name: string;
}
