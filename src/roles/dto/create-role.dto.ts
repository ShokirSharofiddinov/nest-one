import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role valuesi' })
  @IsNotEmpty()
  @IsString()
  value: string;

  @ApiProperty({ example: 'ADMIN role', description: 'Role valuesi' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
