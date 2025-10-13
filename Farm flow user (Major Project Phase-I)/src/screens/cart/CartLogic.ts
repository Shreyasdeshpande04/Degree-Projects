// CartLogic.ts
import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { CartContext, } from './CartContext';

export function useCartLogic() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id: string) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => removeFromCart(id),
      },
    ]);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty < 1) return;
    updateQuantity(id, newQty);
  };

  return {
    cart,
    loading,
    error,
    totalAmount,
    handleRemove,
    handleUpdateQuantity,
  };
}
