import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app'

let mongo: any;
//测试所有开始之前
beforeAll(async() => {
  process.env.JWT_KEY = 'asdfasdf';

// mongo = new MongoMemoryServer();
// const mongoUri = await mongo.getUri();
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

// await mongoose.connect(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
  await mongoose.connect(mongoUri, {});
});


//在每个测试之前
beforeEach(async () => {
  //得到所有的collections
  const collections = await mongoose.connection.db.collections();

  //删除所有collections
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

// 所有测试之后
afterAll(async () => {
  if (mongo) { await mongo.stop(); }
  await mongoose.connection.close();
  
   
});






