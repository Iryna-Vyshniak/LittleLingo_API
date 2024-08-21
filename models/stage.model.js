import { Schema, model } from 'mongoose';

import handleMongooseError from '../helpers/handleMongooseError.js';
import addUpdateSettings from '../helpers/addUpdateSettings.js';

// Scheme for alphabet with automatic creation of _id
const alphabetSchema = new Schema(
  {
    label: String,
    category: String,
    imageCapitalLetter: String,
    imageSmallLetter: String,
    sound: String,
  },
  { _id: true },
);

// Scheme for colors with automatic creation of _id
const colorsSchema = new Schema(
  {
    label: String,
    category: String,
    image: String,
    sound: String,
  },
  { _id: true },
);
// Scheme for colors with automatic creation of _id
const numbersSchema = new Schema(
  {
    label: String,
    number: String,
    category: String,
    sound: String,
  },
  { _id: true },
);

// Scheme for stage_a
const stageASchema = new Schema(
  {
    alphabet: [alphabetSchema],
    colors: [colorsSchema],
    numbers: [numbersSchema],
  },
  { _id: false },
);

// The main scheme for stages
const StagesSchema = new Schema(
  {
    stage_a: stageASchema,
  },
  { _id: false, versionKey: false },
);

StagesSchema.post('save', handleMongooseError);
StagesSchema.pre('findOneAndUpdate', addUpdateSettings);
StagesSchema.post('findOneAndUpdate', handleMongooseError);

const Stages = model('Stages', StagesSchema);

export default Stages;
