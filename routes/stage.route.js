import { Router } from 'express';

import getAlphabetACtrl from '../controllers/stages/stage.a.controller/getAlphabet.js';
import getColorsACtrl from '../controllers/stages/stage.a.controller/getColors.js';
import getNumbersACtrl from '../controllers/stages/stage.a.controller/getNumbers.js';
import getAnimalsACtrl from '../controllers/stages/stage.a.controller/getAnimals.js';
import getAnimalsBCtrl from '../controllers/stages/stage.b.controller/getAnimals.js';
import getActivityACtrl from '../controllers/stages/stage.a.controller/getActivity.js';

const router = Router();

router.get('/stagea/abc', getAlphabetACtrl);
router.get('/stagea/colors', getColorsACtrl);
router.get('/stagea/numbers', getNumbersACtrl);
router.get('/stagea/animals', getAnimalsACtrl);
router.get('/stageb/animals', getAnimalsBCtrl);
router.get('/stagea/activity', getActivityACtrl);

export default router;
