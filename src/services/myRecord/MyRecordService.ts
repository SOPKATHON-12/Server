import dayjs from 'dayjs';
import { MyRecordDayResponseDto, Record } from '../../interfaces/myRecord/MyRecordDayResponseDto';
import { Day, MyRecordMonthResponseDto } from '../../interfaces/myRecord/MyRecordMonthResponseDto';
import Game from '../../models/Game';

const userId = '6289291fab470b5634c74045';

const getMonthDatas = async (month: number): Promise<MyRecordMonthResponseDto | null> => {
  try {
    const startDate = `2022-${month}-01`;
    const endDate = `2022-${month}-31`;
    const results = await Game.find({
      userId: userId,
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
    });

    const days: Day[] = [];
    let sum = 0;
    results.forEach(result => {
      const date = result.createdAt;
      sum += result.emojiLevel;
      days.push({
        day: Number(dayjs(date).format('DD')),
        emojiLevel: Number(result.emojiLevel),
      });
    });

    const data: MyRecordMonthResponseDto = {
      month: month,
      topEmojiLevel: sum / results.length,
      days: days,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDayDatas = async (month: number, day: number): Promise<MyRecordDayResponseDto | null> => {
  try {
    const date = `2022-${month}-${day + 1}`;
    const results = await Game.find({
      userId: userId,
      createdAt: {
        $eq: new Date(date),
      },
    });

    const records: Record[] = [];
    let sum = 0;
    results.forEach(result => {
      sum += Number(result.emojiLevel);
      records.push({
        score: Number(result.score),
        emojiLevel: Number(result.emojiLevel),
        comment: result.comment,
      });
    });

    const data: MyRecordDayResponseDto = {
      month: month,
      topEmojiLevel: sum / results.length,
      records: records,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getMonthDatas,
  getDayDatas,
};
