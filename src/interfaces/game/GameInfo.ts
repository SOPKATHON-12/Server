import mongoose from 'mongoose';

export interface GameInfo {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  type: string;
  score: string;
  emojiLevel: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
