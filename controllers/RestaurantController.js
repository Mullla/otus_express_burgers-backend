import Restaurant from '../models/Restaurant.js';
import Burger from '../models/Burger.js';

class RestaurantController {
  async create(req, res) {
    try {
      const { name, address, menu } = req.body;
      const restaurant = await Restaurant.create({
        name, address, menu
      });

      const burgers = await Burger.find()

      const burgersToUpdate = [];
      menu.forEach(burgerId => {
        burgersToUpdate.push(burgers.find(burger => burger._id.toString() === burgerId));
      });

      burgersToUpdate.forEach(burger => {
        burger.restaurants.push(restaurant._id)
      });

      burgersToUpdate.forEach( async (burger) => {
        await Burger.findByIdAndUpdate(burger._id, burger, {
          new: true,
        })
      }
      )

      res.json(restaurant);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async query(req, res) {
    try {
      const restaurants = await Restaurant.find();
      return res.json(restaurants);
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

      const restaurant = await Restaurant.findById(id);
      return res.json(restaurant);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const restaurant = req.body;

      if (!restaurant._id) {
        res.status(400).json({ message: 'Id не указан' });
      }

      const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurant._id, restaurant, {
        new: true,
      });
      return res.json(updatedRestaurant);
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

      const restaurant = await Restaurant.findByIdAndDelete(id);
      return res.json(restaurant);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new RestaurantController();
