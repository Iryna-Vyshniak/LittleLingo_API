import mongoose from 'mongoose';
import fs from 'fs/promises';
import path from 'path';
import connectToMongoDB from '../db/connectToMongoDB.js';
import Stages from '../models/stage.model.js';

// Функція для додавання _id до піддокументів
const addIdsToSubdocuments = (data) => {
  if (data.stage_a) {
    if (Array.isArray(data.stage_a.alphabet)) {
      data.stage_a.alphabet.forEach((item) => {
        if (!item._id) {
          item._id = new mongoose.Types.ObjectId();
        }
      });
    }

    if (Array.isArray(data.stage_a.colors)) {
      data.stage_a.colors.forEach((item) => {
        if (!item._id) {
          item._id = new mongoose.Types.ObjectId();
        }
      });
    }
  }
  return data;
};

const seedDatabase = async () => {
  try {
    await connectToMongoDB();

    const filePath = path.resolve('./scripts/stages.json');
    const data = await fs.readFile(filePath, 'utf-8');
    let stagesData = JSON.parse(data);

    // Додавання _id до піддокументів
    stagesData = addIdsToSubdocuments(stagesData);

    await Stages.deleteMany(); // Видалення існуючих даних
    await Stages.insertMany([stagesData]); // Додавання нових даних
    console.log('Дані успішно додані');
  } catch (error) {
    console.error('Помилка при додаванні даних:', error);
  } finally {
    mongoose.connection.close(); // Закриття з'єднання з MongoDB
  }
};

seedDatabase();
