import React from 'react';

const UserStatistics: React.FC = () => {
  const totalOrders = 50;
  const totalRevenue = 2500;

  return (
    <section>
      <h2>Statistics</h2>
      <div>
        <p>Total Orders: {totalOrders}</p>
        <p>Total Revenue: ${totalRevenue}</p>
      </div>
    </section>
  );
};

export default UserStatistics;
