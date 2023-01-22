import mongoose from 'mongoose';

const Burger = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: [String], required: true },
  restaurants: { type: [String], required: true },
});

export default mongoose.model('Burger', Burger);
