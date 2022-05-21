import mongoose from 'mongoose';
import { GameInfo } from '../interfaces/game/GameInfo';

const GameSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    emojiLevel: {
      type: Number,
      required: true,
    },
    comment: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<GameInfo & mongoose.Document>('Game', GameSchema);
