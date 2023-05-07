import request from 'supertest';//可以允许我们伪造一个express app的请求
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
          email: 'test@test.com',
          password: 'password'
        })
        .expect(201);
},150000);
