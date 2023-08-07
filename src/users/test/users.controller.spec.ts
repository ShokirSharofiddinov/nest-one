import { JwtService } from '@nestjs/jwt';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { Test } from '@nestjs/testing';
import { User } from '../model/user.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { userStub } from './stubs/user.stub';

jest.mock('../users.service');
describe('User controller', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();
    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });
  it('should be defined usersController', () => {
    expect(usersController).toBeDefined();
  });
  it('should be defind usersSevice', () => {
    expect(usersService).toBeDefined();
  });

  describe('createUser', () => {
    describe('when createUser is called', () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
        };
        user = await usersController.create(createUserDto);
        console.log(user);
      });
      it('then it should return user', () => {
        expect(usersService.createUser).toHaveBeenCalledWith(createUserDto);
      });
      it('then it should return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getOneUser', () => {
    describe('when getOneUser id called', () => {
      let user: User;
      beforeEach(async () => {
        user = await usersController.getOneUser(userStub().id);
      });
      it('then it should call usersService', () => {
        expect(usersService.getOneUser).toBeCalledWith(userStub().id);
      });

      it('then it should return user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getAllUsers', () => {
    describe('when getAllUsers id called', () => {
      let users: User[];
      beforeEach(async () => {
        users = await usersController.getAllUsers();
      });
      it('then it should call usersService', () => {
        expect(usersService.getOneUser).toBeCalled();
      });

      it('then it should return user', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  // describe('deleteUser', () => {
  //   describe('when deleteUser id called', () => {
  //     let res: Object;
  //     beforeEach(async () => {
  //       res = await usersController.deleteUser(userStub().id);
  //       console.log(res)
  //     });
  //     it('then it should call usersService', () => {
  //       expect(usersService.deleteUser).toBeCalled(userStub().id);
  //     });

  //     it('then it should return message', () => {
  //       expect(res).toEqual({message: "Foydalnuvchi o'chirildi"});
  //     });
  //   });
  // });

  
});
