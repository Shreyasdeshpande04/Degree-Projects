// OrderSuccessScreen.tsx
import React from 'react';
import OrderSuccessUI from './OrderSuccessUI';
import { useOrderSuccessLogic } from './OrderSuccessLogic';

const OrderSuccessScreen: React.FC = () => {
  useOrderSuccessLogic();
  return <OrderSuccessUI />;
};

export default OrderSuccessScreen;
