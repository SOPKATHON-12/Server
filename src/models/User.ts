import mongoose from 'mongoose';
import { UserInfo } from '../interfaces/user/UserInfo';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    games: [mongoose.Types.ObjectId],
    maxRecord: {
      emoji: { type: Number },
      tab: { type: Number },
      decibel: { type: Number },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<UserInfo & mongoose.Document>('User', UserSchema);
