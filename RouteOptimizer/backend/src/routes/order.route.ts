import express from 'express';
import { getOrders, createOrder, searchOrdersController } from '../controllers/orderController';

const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/search', searchOrdersController);

export default router;
