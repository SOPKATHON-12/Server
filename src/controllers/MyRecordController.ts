import { Request, Response } from 'express';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import MyRecordService from '../services/MyRecordService';

const getMonthDatas = async (req: Request, res: Response): Promise<void | Response> => {
  const { month } = req.query;
  try {
    const data = await MyRecordService.getMonthDatas(Number(month));
    // if (!data) {
    //   return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    // }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_MYRECORD_MONTH_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

const getDayDatas = async (req: Request, res: Response): Promise<void | Response> => {
  const { month, day } = req.query;
  try {
    const data = await MyRecordService.getDayDatas(Number(month), Number(day));
    // if (!data) {
    //   return res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    // }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_MYRECORDM_DAY_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getMonthDatas,
  getDayDatas,
};
