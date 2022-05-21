import { Request, Response } from 'express';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import { RankingService } from '../services';

const getRanking = async (req: Request, res: Response) => {
  const type = req.query.type as string;

  try {
    const data = await RankingService.getRanking(type);
    if (!data) {
      res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }

    console.log(data);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_RANKING_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getRanking,
};
