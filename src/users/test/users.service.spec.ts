// import { TestingModule, Test } from '@nestjs/testing';
// import { UsersService } from '../users.service';
// import { userStub } from './stubs/user.stub';
// import { JwtService } from '@nestjs/jwt';
// import { RolesService } from '../../roles/roles.service';
// import { getModelToken } from '@nestjs/sequelize';
// import { User } from '../model/user.model';
// import { Role } from '../../roles/models/role.model';
// import { CreateUserDto } from '../dto/create-user.dto';

// describe('User servise', () => {
//   let usersService: UsersService;

//   const mockUsersRepository = {
//     create: jest.fn().mockImplementation(userStub),
//     findOne: jest.fn().mockImplementation(userStub),
//     findAll: jest.fn().mockImplementation(() => [userStub()]),
//     findByPk: jest.fn().mockImplementation(userStub),
//     destroy: jest.fn().mockImplementation(userStub),
//   };

//   const mockRolesRepository = {
//     findOne: jest.fn().mockImplementation((value) => 'ADMIN'),
//   };

//   beforeAll(async () => {
//     const moduleRef: TestingModule = await Test.createTestingModule({
//       imports: [],
//       providers: [
//         UsersService,
//         JwtService,
//         RolesService,
//         {
//           provide: getModelToken(User),
//           useValue: mockUsersRepository,
//         },
//         {
//           provide: getModelToken(Role),
//           useValue: mockRolesRepository,
//         },
//       ],
//     }).compile();

//     usersService = moduleRef.get<UsersService>(UsersService);
//   });

//   it('should be defined', () => {
//     expect(usersService).toBeDefined();
//   });

//   describe('creaeUser', () => {
//     describe('when createUser is called', () => {
//       let createUsersDto: CreateUserDto;
//       let newUser: User;
//       beforeEach(async () => {
//         createUsersDto = {
//           name: userStub().name,
//           email: userStub().email,
//           password: userStub().password,
//         };
//         newUser = await usersService.createUser(createUsersDto);
//         console.log(newUser);
//       });
//       it('should be create new user', async () => {
//         expect(newUser).toMatchObject({
//           ...userStub(),
//           roles: ['ADMIN'],
//         });
//       });
//     });
//   });

//   describe('getOneUser', () => {
//     describe('when getOneUser is called', () => {
//       test('then it should call usersSevice', async () => {
//         expect(await usersService.getOneUser(userStub().id)).toEqual(
//           userStub(),
//         );
//       });
//     });
//   });

//   describe('getAllUsers', () => {
//     describe('when getAllUsers is called', () => {
//       test('then it should call usersSevice', async () => {
//         expect(await usersService.getAllUsers()).toEqual([userStub()]);
//       });
//     });
//   });

//   describe('deleteUser', () => {
//     describe('when deleteUser is called', () => {
//       test('then it should call usersSevice', async () => {
//         expect(await usersService.deleteUser(userStub().id));
//       });
//     });
//   });
// });
