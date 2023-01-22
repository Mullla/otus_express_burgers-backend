import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = process.env.PORT || 3001;

const app = express();

async function startApp() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.DB_URL, {
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

app.use(express.json());
app.use('/', router);

startApp();
