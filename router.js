import Router from 'express';
import { burgersRouter } from './routes/BurgersRouter.js';
import { restaurantsRouter } from './routes/RestaurantsRouter.js';
import constants from './utils/constants.js';

const { BURGERS, RESTAURANTS } = constants;

const router = new Router();

router.get('/', (req, res) => {
  res.json(`Please, go "/${BURGERS}" or "/${RESTAURANTS}"`);
});

router.use(`/${BURGERS}`, burgersRouter);
router.use(`/${RESTAURANTS}`, restaurantsRouter);

export default router;
