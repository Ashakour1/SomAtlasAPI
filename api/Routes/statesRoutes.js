import express from 'express';

import { getAllStates } from '../Controllers/getAllStates.js';
import { setStates } from '../Controllers/setStates.js';
import { updateState } from '../Controllers/updateState.js';
import { deleteState } from '../Controllers/deleteState.js';
import { getState } from '../Controllers/getState.js';
const router = express.Router();

router.get('/',getAllStates);
router.post('/',setStates);
router.put('/:id',updateState);
router.delete('/:id',deleteState);
router.get('/:id',getState);

export default router;