import Router from 'express';
import constants from '../utils/constants.js';
import RestaurantController from '../controllers/RestaurantController.js'

const { RESTAURANTS } = constants;

const router = new Router();

router.get('/', RestaurantController.query);

router.get('/:id', RestaurantController.get);

router.post('/', RestaurantController.create);

router.put('/', RestaurantController.update);

router.delete('/:id', RestaurantController.delete);

export { router as restaurantsRouter };
