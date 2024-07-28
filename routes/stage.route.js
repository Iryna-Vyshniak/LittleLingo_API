import { Router } from 'express';

import getAlphabetACtrl from '../controllers/stages/stage.a.controller/getAlphabet.js';

const router = Router();

router.get('/stagea/abc', getAlphabetACtrl);

export default router;
