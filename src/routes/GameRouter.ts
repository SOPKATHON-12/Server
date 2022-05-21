import { Router } from 'express';
import GameController from '../controllers/GameController';

const router: Router = Router();
router.post('/', GameController.createGame);

export default router;
