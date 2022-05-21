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
      emojiLevel: {
        type: Number,
        default: 0,
      },
      tab: {
        type: Number,
        default: 0,
      },
      decibel: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<UserInfo & mongoose.Document>('User', UserSchema);
