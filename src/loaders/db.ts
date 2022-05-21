import mongoose from 'mongoose';
import config from '../config';
import Game from '../models/Game';
import User from '../models/User';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);

    console.log('Mongoose Connected ...');

    Game.createCollection().then(function (collection) {
      console.log('Game Collection is created!');
    });

    User.createCollection().then(function (collection) {
      console.log('User Collection is created!');
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
