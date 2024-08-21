import { Router } from 'express';

import getAlphabetACtrl from '../controllers/stages/stage.a.controller/getAlphabet.js';
import getColorsACtrl from '../controllers/stages/stage.a.controller/getColors.js';
import getNumbersACtrl from '../controllers/stages/stage.a.controller/getNumbers.js';

const router = Router();

router.get('/stagea/abc', getAlphabetACtrl);
router.get('/stagea/colors', getColorsACtrl);
router.get('/stagea/numbers', getNumbersACtrl);

export default router;
