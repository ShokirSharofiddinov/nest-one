import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: '1', description: "role userId qo'shish" })
  readonly userId: number;

  @ApiProperty({ example: 'user1', description: "role userValue qo'shish" })
  readonly value: string;
}
