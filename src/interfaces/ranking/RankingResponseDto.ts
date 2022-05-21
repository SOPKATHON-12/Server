import { RankingRecordInfo } from './RankingRecordInfo';

export interface RankingResponseDto {
  myRank: number;
  myEmojiLevel: number;
  myScore: number;
  myName: string;
  topRankers: RankingRecordInfo[];
  rankers: RankingRecordInfo[];
}
