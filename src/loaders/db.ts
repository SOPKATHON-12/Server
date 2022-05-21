import mongoose from 'mongoose';
import config from '../config';
import Game from '../models/Game';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);

    Game.createCollection().then(function (collection) {
      console.log('Game Collection is created!');
    });

    console.log('Mongoose Connected ...');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
