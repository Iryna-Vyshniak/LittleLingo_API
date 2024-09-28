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
    imageUrl: String,
    description: String,
    sound: String,
    soundDescr: String,
    transcription: String,
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
    imageUrl: String,
    sound: String,
  },
  { _id: true },
);
// Scheme for animals with automatic creation of _id
const animalsSchema = new Schema(
  {
    name: String,
    category: String,
    imageUrl: String,
    sound: String,
  },
  { _id: true },
);
// Scheme for activity with automatic creation of _id
const activitySchema = new Schema(
  {
    name: String,
    category: String,
    imageUrl: String,
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
    animals: [animalsSchema],
    activity: [activitySchema],
  },
  { _id: false },
);
// Scheme for stage_b
const stageBSchema = new Schema(
  {
    alphabet: [alphabetSchema],
    colors: [colorsSchema],
    numbers: [numbersSchema],
    animals: [animalsSchema],
  },
  { _id: false },
);

// The main scheme for stages
const StagesSchema = new Schema(
  {
    stage_a: stageASchema,
    stage_b: stageBSchema,
  },
  { _id: false, versionKey: false },
);

StagesSchema.post('save', handleMongooseError);
StagesSchema.pre('findOneAndUpdate', addUpdateSettings);
StagesSchema.post('findOneAndUpdate', handleMongooseError);

const Stages = model('Stages', StagesSchema);

export default Stages;
