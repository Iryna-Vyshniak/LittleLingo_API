import { Schema, model } from 'mongoose';

// Scheme for alphabet with automatic creation of _id
const alphabetSchema = new Schema(
  {
    label: String,
    category: String,
    image: String,
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

// Scheme for stage_a
const stageASchema = new Schema(
  {
    alphabet: [alphabetSchema],
    colors: [colorsSchema],
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

const Stages = model('Stages', StagesSchema);

export default Stages;
