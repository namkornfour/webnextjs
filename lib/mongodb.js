import mongoose from "mongoose";
require('dotenv').config();

export default async function mongodbConnect() {
   try {
     await mongoose.connect(process.env.MONGODB_URI);
     //await mongoose.connect('mongodb://localhost:27017/acctax');
     await mongoose.connection.syncIndexes();
     console.log("Database connected!!!");
   } catch (error) {
     console.error(error.messsage);
   }    
}

/*const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function mongodbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log('Database connected!!!');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error('Database connection error:', error.message);
    throw new Error('Failed to connect to MongoDB');
  }
}*/