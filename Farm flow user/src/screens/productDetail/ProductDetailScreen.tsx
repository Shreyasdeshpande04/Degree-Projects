// ProductDetailScreen.tsx
import React, { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../navigation/types';
import ProductDetailUI from './ProductDetailUI';
import { useProductDetailLogic } from './ProductDetailLogic';

const ProductDetailScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const {
    product,
    loading,
    imgIndex,
    setImgIndex,
    cartCount,
    handleAddToCart,
  } = useProductDetailLogic(route.params?.productId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Product Details',
    });
  }, [navigation]);

  const handleBuyNow = () => {
    if (product) {
      navigation.navigate('CheckoutDetailsScreen', { product });
    }
  };

  return (
    <ProductDetailUI
      product={product}
      loading={loading}
      imgIndex={imgIndex}
      cartCount={cartCount}
      setImgIndex={setImgIndex}
      onAddToCart={() => product && handleAddToCart(product)}
      onBuyNow={handleBuyNow}
      onCartPress={() => navigation.navigate('CartScreen')}
    />
  );
};

export default ProductDetailScreen;
