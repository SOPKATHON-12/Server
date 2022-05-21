import { NextFunction, Request, Response } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import config from '../config';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';

declare function isTokenExpiredError(x: unknown): x is TokenExpiredError;

export default (req: Request, res: Response, next: NextFunction) => {
  // request-header 에서 토큰 받아오기
  // Bearer token 파싱해서 토큰만 가져오기
  const token = req.headers['authorization']?.split(' ').reverse()[0];

  // 토큰 유무 검출
  // 토큰 없는 경우 401 에러 반환 - 접근 금지
  if (!token) {
    return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.NULL_VALUE_TOKEN));
  }

  // 토큰 검증
  try {
    const decoded = jwt.verify(token, config.jwtSecret); // jwt.verify(token, secretKey) -> jwt token 해독
    req.body.user = (decoded as any).user; // payload 꺼내오기 -> decoded 타입 단언 필요
    next(); // next -> middleware 끝나면 다음으로 넘기기
  } catch (error: any) {
    console.log(error);
    // TokenExpiredError 발생 시 401 반환
    if (error.name === 'TokenExpiredError') {
      // error.name === "TokenExpiredError"  -> isTokenExpiredError(error)
      return res.status(statusCode.UNAUTHORIZED).send(util.fail(statusCode.UNAUTHORIZED, message.INVALID_TOKEN));
    }

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};
