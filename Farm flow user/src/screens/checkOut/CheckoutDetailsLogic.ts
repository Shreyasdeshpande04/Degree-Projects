// CheckoutDetailsLogic.ts
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { UserAddress } from '../../navigation/types';

const MAX_QUANTITY = 99;
const MIN_QUANTITY = 1;

function getUnitAndStep(product: any) {
  if (product.unit === 'liter') return { unitLabel: 'L', step: 0.5 };
  if (product.unit === 'kg') return { unitLabel: 'kg', step: 0.5 };
  if (product.unit === 'g') return { unitLabel: 'g', step: 100 };
  if (product.unit === 'ml') return { unitLabel: 'ml', step: 100 };
  return { unitLabel: 'pcs', step: 1 };
}

export function useCheckoutDetailsLogic() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { product, updatedAddress } = route.params || {};

  const { unitLabel, step } = getUnitAndStep(product);

  const [quantity, setQuantity] = useState<number>(product.minQuantity || 1);
  const [userAddress, setUserAddress] = useState<UserAddress | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (updatedAddress) {
      setUserAddress(updatedAddress);
      setLoading(false);
    } else {
      // Simulate API call
      setTimeout(() => {
        setUserAddress({
          name: 'John Doe',
          address: '123 Main Street, Springfield',
        });
        setLoading(false);
      }, 1200);
    }
  }, [updatedAddress]);

  const increaseQuantity = () => {
    if (quantity + step <= MAX_QUANTITY) {
      setQuantity(prev => Math.round((prev + step) * 100) / 100);
    } else {
      Alert.alert('Maximum quantity reached');
    }
  };

  const decreaseQuantity = () => {
    if (quantity - step >= MIN_QUANTITY) {
      setQuantity(prev => Math.round((prev - step) * 100) / 100);
    }
  };

  const handleCheckout = () => {
    navigation.navigate('OrderSuccessScreen');
  };

  const handleChangeAddress = () => {
    navigation.navigate('ChangeAddressScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const formatCurrency = (amount: number) => `₹${amount.toFixed(2)}`;

  return {
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
  };
}
