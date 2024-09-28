import ctrlWrapper from '../../../decorators/controllerWrapper.js';
import Stages from '../../../models/stage.model.js';

const getActivity = ctrlWrapper(async (req, res) => {
  const activity = await Stages.find({}, { 'stage_a.activity': 1 });
  res.json(activity);
});

export default getActivity;
