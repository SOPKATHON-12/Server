import { MyRecordResponseDto } from './MyRecordResponseDto';

export interface MyRecordDayResponseDto extends MyRecordResponseDto {
  records: Record[];
}

export interface Record {
  emojiLevel: number;
  score: number;
  comment: string;
}
