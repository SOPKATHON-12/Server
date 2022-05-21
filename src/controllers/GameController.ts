import express, { Request, Response } from 'express';
import { GameCreateDto } from '../interfaces/game/GameCreateDto';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import GameService from '../services/game/GameService';
import UserService from '../services/user/UserService';

const createGame = async (req: Request, res: Response) => {
  const gameCreateDto: GameCreateDto = req.body;

  try {
    const data = await GameService.createGame(gameCreateDto);
    await UserService.updateUserMaxRecord(data._id, gameCreateDto);

    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_GAME_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createGame,
};
