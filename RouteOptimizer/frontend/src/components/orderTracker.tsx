import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/api';

interface Order {
  _id: string;
  customerName: string;
  deliveryAddress: string;
  orderStatus: string;
}

const OrderTracker: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await fetchOrders();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders', error);
        setError('Failed to fetch orders. Please try again later.');
      }
    };

    getOrders();
  }, []);

  return (
    <div>
      <h2>Order Tracker</h2>
      {error && <p>{error}</p>}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              {order.customerName} - {order.deliveryAddress} - {order.orderStatus}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderTracker;
