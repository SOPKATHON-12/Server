// router index file
import { Router } from 'express';
import GameRouter from './GameRouter';

const router: Router = Router();

router.use('/game', GameRouter);

export default router;
