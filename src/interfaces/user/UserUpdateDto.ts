import mongoose from 'mongoose';
import { MaxRecordInfo } from '../maxRecord/MaxRecordInfo';

export interface UserUpdateDto {
  name?: string;
  games?: mongoose.Types.ObjectId[];
  maxRecord?: MaxRecordInfo;
}
