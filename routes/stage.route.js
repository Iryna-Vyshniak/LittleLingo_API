import { Router } from 'express';

import getAlphabetACtrl from '../controllers/stages/stage.a.controller/getAlphabet.js';
import getColorsACtrl from '../controllers/stages/stage.a.controller/getColors.js';

const router = Router();

router.get('/stagea/abc', getAlphabetACtrl);
router.get('/stagea/colors', getColorsACtrl);

export default router;
