import ctrlWrapper from '../../../decorators/controllerWrapper.js';
import Stages from '../../../models/stage.model.js';

const getColors = ctrlWrapper(async (req, res) => {
  const colors = await Stages.find({}, { 'stage_a.colors': 1 });
  res.json(colors);
});

export default getColors;
