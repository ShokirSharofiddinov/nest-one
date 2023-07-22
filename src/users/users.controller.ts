import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './model/user.model';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Foydalanuvchilar')
// @ApiOperation({ summary: 'Foydalanuvchi yaratish' })
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Foydalanuvchi yaratish' })
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @ApiOperation({ summary: "Foydalanuvchi Ko'rish" })
  @Get()
  findAllUsers() {
    return this.usersService.getAllUser();
  }

  @ApiOperation({ summary: "role qo'shish" })
  @HttpCode(200)
  @Post('add_role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.addRole(addRoleDto);
  }

  @ApiOperation({ summary: "role o'chirish" })
  @HttpCode(200)
  @Post('remove_role')
  removeRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.removeRole(addRoleDto);
  }

  @ApiOperation({ summary: 'Foydalanuvchini faollashtirish' })
  @HttpCode(200)
  @Post('activate')
  activateUser(@Body() activateUser: ActivateUserDto) {
    return this.usersService.activateUser(activateUser);
  }

  @ApiOperation({ summary: 'Foydalanuvchini active dan chqarish' })
  @HttpCode(200)
  @Post('reactivate')
  reActivateUser(@Body() activateUser: ActivateUserDto) {
    return this.usersService.reActivateUser(activateUser);
  }
}
