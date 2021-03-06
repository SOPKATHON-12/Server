import { RankingResponseDto } from '../../interfaces/ranking/RankingResponseDto';
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
        userId: o.id,
        name: o.name,
        games: o.games,
        emojiLevel: o.maxRecord.emojiLevel,
        tab: o.maxRecord.tab,
        decibel: o.maxRecord.decibel,
      };
      return userObject;
    });
    rankingArr = _.sortBy(rankingArr, [type]).reverse();

    // console.log(rankingArr);
    const myRank: number = _.findIndex(rankingArr, { userId: '6289291fab470b5634c74045' }) + 1;

    // console.log(index);

    const rankers = await Promise.all(
      rankingArr.slice(0, 10).map((record: any) => {
        let curScore = record.decibel;
        if (type == 'decibel') {
          curScore = record.decibel;
        } else if (type == 'tab') {
          curScore = record.tab;
        }
        const result = {
          userName: record.name,
          score: curScore,
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
      myRank: myRank,
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
