// CartScreen.tsx
import React from 'react';
import CartUI from './CartUI';
import { useCartLogic } from './CartLogic';

const CartScreen = ({ navigation }) => {
  const {
    cart,
    loading,
    error,
    totalAmount,
    handleRemove,
    handleUpdateQuantity,
  } = useCartLogic();

  const handleGoBack = () => navigation?.goBack?.();
  const handleCheckout = () => {
    // Navigate to checkout
    navigation.navigate('CheckoutDetailsScreen', { cart });
  };

  return (
    <CartUI
      cart={cart}
      loading={loading}
      error={error}
      totalAmount={totalAmount}
      onRemove={handleRemove}
      onUpdateQuantity={handleUpdateQuantity}
      onGoBack={handleGoBack}
      onCheckout={handleCheckout}
    />
  );
};

export default CartScreen;
