import Router from 'express';
import constants from '../utils/constants.js';
import BurgerController from '../controllers/BurgerController.js'

const { BURGERS } = constants;

const router = new Router();

router.get('/', BurgerController.query);

router.get('/:id', BurgerController.get);

router.post('/', BurgerController.create);

router.put('/', BurgerController.update);

router.delete('/:id', BurgerController.delete);

export { router as burgersRouter };
