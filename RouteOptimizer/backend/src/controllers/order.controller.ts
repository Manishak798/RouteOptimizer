import { Request, Response } from 'express';
import Order from '../models/orderModel';
import { indexOrder, searchOrders } from '../utils/elasticsearch';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    await indexOrder(newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const searchOrdersController = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    const results = await searchOrders(query as string);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
