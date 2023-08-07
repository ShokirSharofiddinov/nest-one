import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('User (e2e)', () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'ADMIN@gmail.com',
        password: 'P@$$w0rd',
      });

    token = response.body.token;
    console.log(token);
  });
  it('/users (GET) ==> 200 OK', () => {
    return request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('/users (GET) --> 401 "Unauthorized" error', () => {
    return (
      request(app.getHttpServer())
        .get('/users')
        // .set('Authorization', `Beare ${token}`)
        .expect('Content-Type', /json/)
        .expect(401)
    );
  });

  it('/users/activate (POST) --> 200', async () => {
    return await request(app.getHttpServer())
      .post('/users/activate')
      .send({
        userId: 7,
      })
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('/auth/registration (POST) --> 201', async () => {
    return request(app.getHttpServer())
      .post('/auth/registration')
      .send({
        name: 'user12345',
        email: 'user12345@gmial.com',
        password: 'P@$$w0rd',
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject({
          token: expect.any(String),
        });
      });
  });

  it('/auth/registration (POST) --> 400', async () => {
    return request(app.getHttpServer())
      .post('/auth/registration')
      .send({
        name: 'user12345',
        email: 'user12345@gmial.com',
        password: 'P@$$w0rd',
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .expect({
        statusCode: 400,
        message: 'Bunday foydalanuvchi mavjud',
      });
  });

  it('/auth/registration (POST) --> 400 on Validation error', async () => {
    return request(app.getHttpServer())
      .post('/auth/registration')
      .send({
        name: 'qwer',
        password: '123',
        email: 'qwer@gmial.com',
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .expect({
        statusCode: 400,
        message: ['passwprd is not string enough'],
        error: 'Bad request',
      });
  });
  afterAll(async () => {
    await app.close();
  });
});
