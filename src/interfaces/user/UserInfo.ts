import mongoose from 'mongoose';
import { MaxRecordInfo } from '../maxRecord/MaxRecordInfo';

export interface UserInfo {
  name: string;
  games: mongoose.Types.ObjectId[];
  maxRecord: MaxRecordInfo;
}
