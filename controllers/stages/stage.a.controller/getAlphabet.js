import ctrlWrapper from '../../../decorators/controllerWrapper.js';
import Stages from '../../../models/stage.model.js';

const getAlphabet = ctrlWrapper(async (req, res) => {
  const alphabet = await Stages.find({}, { 'stage_a.alphabet': 1 });
  res.json(alphabet);
});

export default getAlphabet;
