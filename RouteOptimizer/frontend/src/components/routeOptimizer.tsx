import React, { useState } from 'react';
import { optimizeRoutes } from '../services/api';

interface Route {
  customerName: string;
  deliveryAddress: string;
}

const RouteOptimizer: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  const handleOptimize = async () => {
    const { data } = await optimizeRoutes();
    setRoutes(data);
  };

  return (
    <div>
      <h2>Route Optimizer</h2>
      <button onClick={handleOptimize}>Optimize Routes</button>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>{route.customerName} - {route.deliveryAddress}</li>
        ))}
      </ul>
    </div>
  );
};

export default RouteOptimizer;
