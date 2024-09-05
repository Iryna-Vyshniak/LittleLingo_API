import ctrlWrapper from '../../../decorators/controllerWrapper.js';
import Stages from '../../../models/stage.model.js';

const getNumbers = ctrlWrapper(async (req, res) => {
  const numbers = await Stages.find({}, { 'stage_a.numbers': 1 });
  console.log('numbers: ', numbers);
  res.json(numbers);
});

export default getNumbers;
