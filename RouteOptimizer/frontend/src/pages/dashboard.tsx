import React from 'react';
import RecentOrders from '../components/recentOrder';
import UserStatistics from '../components/userStatics';
import Notifications from '../components/notifications';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. Here you can find an overview of your data and recent activity.</p>

      <RecentOrders />
      <UserStatistics />
      <Notifications />
    </div>
  );
};

export default Dashboard;
