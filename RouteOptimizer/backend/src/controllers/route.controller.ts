import { Request, Response } from 'express';
import Order from '../models/orderModel';
import { optimizeRoutes } from '../services/routeService';

export const getOptimizedRoutes = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    const optimizedRoutes = optimizeRoutes(orders);
    res.json(optimizedRoutes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
