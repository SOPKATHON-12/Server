// router index file
import { Router } from 'express';
import MyRecordRouter from './MyRecordRouter';
const router: Router = Router();

router.use('/myrecord', MyRecordRouter);

export default router;
