import { PostBaseResponseDto } from '../../interfaces/common/PostBaseResponseDto';
import { GameCreateDto } from '../../interfaces/game/GameCreateDto';
import Game from '../../models/Game';

const createGame = async (gameCreateDto: GameCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const game = new Game({
      userId: '6289291fab470b5634c74045',
      type: gameCreateDto.type,
      score: gameCreateDto.score,
      emojiLevel: gameCreateDto.emojiLevel,
      comment: gameCreateDto.comment,
    });
    await game.save();

    const data = {
      _id: game._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createGame,
};
