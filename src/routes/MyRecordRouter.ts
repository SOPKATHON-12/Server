import { Router } from 'express';
import MyRecordController from '../controllers/MyRecordController';

const router: Router = Router();

router.get('/month', MyRecordController.getMonthDatas);
router.get('/date', MyRecordController.getDayDatas);

export default router;
