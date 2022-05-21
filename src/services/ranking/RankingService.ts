import { RankingRecordInfo } from '../../interfaces/ranking/RankingRecordInfo';
import { RankingResponseDto } from '../../interfaces/ranking/RankingResponseDto';
import Game from '../../models/Game';
import User from '../../models/User';
import _ from 'lodash';

const getRanking = async (type: string): Promise<RankingResponseDto | null> => {
  try {
    const user = await User.findById('6289291fab470b5634c74045');
    if (!user) {
      return null;
    }
    const ranking = await User.find();
    let rankingArr = ranking.map(o => {
      const userObject = {
        userId: o._id,
        name: o.name,
        games: o.games,
        emojiLevel: o.maxRecord.emojiLevel,
        tab: o.maxRecord.tab,
        decibel: o.maxRecord.decibel,
      };
      return userObject;
    });
    rankingArr = _.sortBy(rankingArr, [type]).reverse();

    console.log(rankingArr);
    const index: number = rankingArr.findIndex((rankingData: any) => (rankingData.userId = '6289291fab470b5634c74045'));
    console.log(index);

    const rankers = await Promise.all(
      rankingArr.slice(0, 10).map((record: any) => {
        const result = {
          userName: record.name,
          score: record.decibel,
          emojiLevel: record.emojiLevel,
        };
        return result;
      }),
    );

    let userScore = 0;
    if (type == 'decibel') {
      userScore = user.maxRecord.decibel;
    } else if (type == 'tab') {
      userScore = user.maxRecord.tab;
    }

    return {
      myRank: 1,
      myScore: userScore,
      myEmojiLevel: user.maxRecord.emojiLevel,
      myName: user.name,
      topRankers: rankers.slice(0, 3),
      rankers: rankers.slice(3, 10),
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getRanking,
};
