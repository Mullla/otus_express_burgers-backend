import mongoose from 'mongoose';

const Restaurant = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  menu: { type: [String], required: true },
});

export default mongoose.model('Restaurant', Restaurant);
