import express from 'express';
import { getOptimizedRoutes } from '../controllers/routeController';

const router = express.Router();

router.get('/optimize', getOptimizedRoutes);

export default router;
