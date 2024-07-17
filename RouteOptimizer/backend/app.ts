import express from 'express';
import bodyParser from 'body-parser';
import orderRoutes from './routes/orderRoutes';
import routeRoutes from './routes/routeRoutes';

const app = express();

app.use(bodyParser.json());
app.use('/api/orders', orderRoutes);
app.use('/api/routes', routeRoutes);

export default app;
