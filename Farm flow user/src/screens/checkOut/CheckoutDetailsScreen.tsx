// CheckoutDetailsScreen.tsx
import React from 'react';
import CheckoutDetailsUI from './CheckoutDetailsUI';
import { useCheckoutDetailsLogic } from './CheckoutDetailsLogic';

const CheckoutDetailsScreen = () => {
  const {
    product,
    quantity,
    unitLabel,
    userAddress,
    loading,
    increaseQuantity,
    decreaseQuantity,
    handleCheckout,
    handleChangeAddress,
    handleBack,
    formatCurrency,
  } = useCheckoutDetailsLogic();

  return (
    <CheckoutDetailsUI
      product={product}
      quantity={quantity}
      unitLabel={unitLabel}
      userAddress={userAddress}
      loading={loading}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      handleCheckout={handleCheckout}
      handleChangeAddress={handleChangeAddress}
      handleBack={handleBack}
      formatCurrency={formatCurrency}
    />
  );
};

export default CheckoutDetailsScreen;
