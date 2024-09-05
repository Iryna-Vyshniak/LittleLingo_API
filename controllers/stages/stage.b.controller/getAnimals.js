import ctrlWrapper from '../../../decorators/controllerWrapper.js';
import Stages from '../../../models/stage.model.js';

const getAnimals = ctrlWrapper(async (req, res) => {
  const animals = await Stages.find({}, { 'stage_b.animals': 1 });
  res.json(animals);
});

export default getAnimals;
