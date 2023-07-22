import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from 'src/roles/models/user-roles.model';
import { User } from './model/user.model';
import { RolesModule } from 'src/roles/roles.module';
import { Role } from 'src/roles/models/role.model';

@Module({
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
