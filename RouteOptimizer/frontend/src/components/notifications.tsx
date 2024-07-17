import React from 'react';

interface Notification {
  id: string;
  message: string;
}

const notifications: Notification[] = [
  { id: '1', message: 'Order #1234 shipped.' },
  { id: '2', message: 'Payment received from User A.' },
  { id: '3', message: 'New user registration.' },
];

const Notifications: React.FC = () => {
  return (
    <section>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
