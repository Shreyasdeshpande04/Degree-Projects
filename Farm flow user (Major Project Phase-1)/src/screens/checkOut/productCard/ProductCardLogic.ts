// ProductCardLogic.ts
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { GestureResponderEvent } from 'react-native';

export interface ProductCardLogicProps {
  product: {
    id: string;
    name: string;
    rating: number;
    deliveryUpto: string;
    images: string[];
    originalPrice: number;
    discountPercentage: number;
    price: number;
    unit?: string;
  };
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  unitLabel: string;
}

export function useProductCardLogic({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  unitLabel,
}: ProductCardLogicProps) {
  const navigation = useNavigation<NavigationProp<any>>();

  const itemOriginalPrice = product.originalPrice || 0;
  const discountPercentage = product.discountPercentage || 0;

  const price = product.price * quantity;
  const subtotal = itemOriginalPrice * quantity;
  const discount = subtotal - price;
  const delivery = 0; // free delivery
  const totalAmount = price + delivery;

  const handleDecrease = (e: GestureResponderEvent) => {
    e.stopPropagation();
    decreaseQuantity();
  };
  const handleIncrease = (e: GestureResponderEvent) => {
    e.stopPropagation();
    increaseQuantity();
  };

  const handleCardPress = () => {
    navigation.replace('ProductDetailScreen', { productId: product.id });
  };

  return {
    itemOriginalPrice,
    discountPercentage,
    price,
    subtotal,
    discount,
    delivery,
    totalAmount,
    handleDecrease,
    handleIncrease,
    handleCardPress,
  };
}
