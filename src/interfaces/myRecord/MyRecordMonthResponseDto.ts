import { MyRecordResponseDto } from './MyRecordResponseDto';

export interface MyRecordMonthResponseDto extends MyRecordResponseDto {
  days: Day[];
}

export interface Day {
  day: number;
  emojiLevel: number;
}
