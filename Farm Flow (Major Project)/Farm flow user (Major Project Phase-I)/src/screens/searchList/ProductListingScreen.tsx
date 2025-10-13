// ProductListingScreen.tsx
import React from 'react';
import ProductListingUI from './ProductListingUI';
import { useProductListingLogic } from './ProductListingLogic';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductListingScreen: React.FC = () => {
  const {
    navigation,
    cart,
    searchText,
    setSearchText,
    loading,
    list,
  } = useProductListingLogic();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon name="shopping-cart" size={22} color="#2874F0" style={{ marginRight: 16 }} />
      ),
      headerTitle: 'Shop',
    });
  }, [navigation, cart.length]);

  return (
    <ProductListingUI
      cartCount={cart.length}
      searchText={searchText}
      setSearchText={setSearchText}
      loading={loading}
      list={list}
      onCartPress={() => navigation.navigate('CartScreen')}
      onProductPress={(id) => navigation.navigate('ProductDetailScreen', { productId: id })}
    />
  );
};

export default ProductListingScreen;
