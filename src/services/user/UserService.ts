import mongoose from 'mongoose';
import { MaxRecordInfo } from '../../interfaces/maxRecord/MaxRecordInfo';
import User from '../../models/User';
import { UserUpdateDto } from '../../interfaces/user/UserUpdateDto';
import { GameCreateDto } from '../../interfaces/game/GameCreateDto';

const updateUserMaxRecord = async (gameId: mongoose.Types.ObjectId, gameCreateDto: GameCreateDto): Promise<boolean | null> => {
  try {
    const user = await User.findById('6289291fab470b5634c74045');
    if (!user) {
      return null;
    }

    const newGames: mongoose.Types.ObjectId[] = [...user.games, gameId];
    let isUpdated = false;
    let newEmojiLevel = user.maxRecord.emojiLevel;
    let newDecibel = user.maxRecord.decibel;
    let newTab = user.maxRecord.tab;

    if (user.maxRecord.emojiLevel <= gameCreateDto.emojiLevel) {
      newEmojiLevel = gameCreateDto.emojiLevel;
      isUpdated = true;
    }

    if (gameCreateDto.type == 'decibel') {
      if (user.maxRecord.decibel <= gameCreateDto.score) {
        newDecibel = gameCreateDto.score;
        isUpdated = true;
      }
    } else if (gameCreateDto.type == 'tab') {
      if (user.maxRecord.tab <= gameCreateDto.score) {
        newTab = gameCreateDto.score;
        isUpdated = true;
      }
    }
    if (isUpdated) {
      const newMaxRecord: MaxRecordInfo = {
        emojiLevel: newEmojiLevel,
        decibel: newDecibel,
        tab: newTab,
      };
      const userUpdateDto: UserUpdateDto = {
        games: newGames,
        maxRecord: newMaxRecord,
      };
      await User.findByIdAndUpdate('6289291fab470b5634c74045', userUpdateDto);
    }

    return isUpdated;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  updateUserMaxRecord,
};
