import mongoose from 'mongoose';

import env from '../utils/env.js';

const connectToMongoDB = async () => {
  try {
    const db = env('MONGODB_URI');
    await mongoose.connect(db);
    console.log('Database connection success');
  } catch (error) {
    console.log(`Error connect to database ${error.message}`);
    throw error;
  }
};

export default connectToMongoDB;
