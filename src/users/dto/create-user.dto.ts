import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsNotEmpty, IsStrongPassword, IsEmail } from "class-validator"

export class CreateUserDto {
  @ApiProperty({ example: 'user1', description: 'Foydalanuvchi nomi' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'user1@mail.uz', description: 'Foydalanuvchi email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Uzbek1$t0n', description: 'Foydalanuvchi paroli' })
  @IsNotEmpty()
  @IsStrongPassword({ minLength: 5 })
  password: string;
}
