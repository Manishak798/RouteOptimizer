import React from 'react';

interface Order {
  id: string;
  customerName: string;
  status: string;
}

const recentOrders: Order[] = [
  { id: '1', customerName: 'Alice', status: 'Shipped' },
  { id: '2', customerName: 'Bob', status: 'Processing' },
  { id: '3', customerName: 'Charlie', status: 'Delivered' },
];

const RecentOrders: React.FC = () => {
  return (
    <section>
      <h2>Recent Orders</h2>
      <ul>
        {recentOrders.map(order => (
          <li key={order.id}>
            {order.customerName} - {order.status}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentOrders;
