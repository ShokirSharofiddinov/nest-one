import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty({
    example: 'user1 -> user2',
    description: 'Foydalanuvchi nomi update qilish',
  })
  name?: string;

  @ApiProperty({
    example: 'user1@mail.uz -> user2@mail.uz',
    description: 'Foydalanuvchi email update qilish',
  })
  email?: string;

  @ApiProperty({
    example: 'Uzbek1$t0n -> Uzbek1$t0n1',
    description: 'Foydalanuvchi parollni update qilish',
  })
  password?: string;
}
