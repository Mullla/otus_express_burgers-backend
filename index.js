import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = process.env.PORT || 3001;

const app = express();
const DB_URL = 'mongodb+srv://root:root1@cluster0.la4beut.mongodb.net/?retryWrites=true&w=majority';


async function startApp() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(PORT, () => {
      console.log(`🚀 Сервер запущен на ${PORT} порту`);
    });
  } catch (error) {
    console.log('🚧', error);
  }
}

app.use(cors());
app.use(express.json());
app.use('/', router);

startApp();
