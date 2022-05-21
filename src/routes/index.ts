// router index file
import { Router } from 'express';
import GameRouter from './GameRouter';
import MyRecordRouter from './MyRecordRouter';

const router: Router = Router();

router.use('/game', GameRouter);
router.use('/myrecord', MyRecordRouter);

export default router;
