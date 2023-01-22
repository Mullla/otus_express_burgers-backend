import Burger from '../models/Burger.js';

class BurgerController {
  async create(req, res) {
    try {
      const { name, image, ingredients, restaurants } = req.body;
      const burger = await Burger.create({
        name,
        image,
        ingredients,
        restaurants,
      });
      res.json(burger);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async query(req, res) {
    try {
      const burgers = await Burger.find();
      return res.json(burgers);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: 'Id не указан' });
      }

      const burger = await Burger.findById(id);
      return res.json(burger);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const burger = req.body;

      if (!burger._id) {
        res.status(400).json({ message: 'Id не указан' });
      }

      const updatedBurger = await Burger.findByIdAndUpdate(burger._id, burger, {
        new: true,
      });
      return res.json(updatedBurger);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(400).json({ message: 'Id не указан' });
      }

      const burger = await Burger.findByIdAndDelete(id);
      return res.json(burger);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new BurgerController();
