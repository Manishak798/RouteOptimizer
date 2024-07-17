import React from 'react';
import OrderTracker from '../components/orderTracker';
import RouteOptimizer from '../components/routeOptimizer';
import SearchOrders from '../components/searchOrder';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>RouteOptimizer</h1>
      <OrderTracker />
      <RouteOptimizer />
      <SearchOrders />
    </div>
  );
};

export default HomePage;

