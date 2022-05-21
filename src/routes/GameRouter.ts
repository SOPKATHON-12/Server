import { Router } from 'express';
import GameController from '../controllers/GameController';
import RankingController from '../controllers/RankingController';

const router: Router = Router();
router.post('/', GameController.createGame);
router.get('/ranking', RankingController.getRanking);

export default router;
