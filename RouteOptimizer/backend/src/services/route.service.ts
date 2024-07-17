export const optimizeRoutes = (orders: any[]) => {
    // Example DSA: Nearest Neighbor Algorithm for route optimization
    const optimizedRoutes = [];
    while (orders.length > 0) {
      let currentOrder = orders.pop();
      let nearestOrderIndex = -1;
      let minDistance = Infinity;
  
      orders.forEach((order, index) => {
        const distance = calculateDistance(currentOrder, order);
        if (distance < minDistance) {
          minDistance = distance;
          nearestOrderIndex = index;
        }
      });
  
      if (nearestOrderIndex !== -1) {
        optimizedRoutes.push(currentOrder);
        currentOrder = orders.splice(nearestOrderIndex, 1)[0];
      } else {
        optimizedRoutes.push(currentOrder);
      }
    }
    return optimizedRoutes;
  };
  
  const calculateDistance = (order1: any, order2: any) => {
    // Dummy distance calculation, replace with actual logic
    return Math.sqrt(
      Math.pow(order1.latitude - order2.latitude, 2) +
      Math.pow(order1.longitude - order2.longitude, 2)
    );
  };
  