// ProductListingLogic.ts
import { useState, useEffect, useMemo, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootParamList } from '../../navigation/types';
import { CartContext } from '../cart/CartContext';
import { Products, Product } from '../productDetail/products';

export const useProductListingLogic = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const route = useRoute<RouteProp<RootParamList, 'ProductListingScreen'>>();
  const { cart } = useContext(CartContext);

  const [searchText, setSearchText] = useState(route.params?.query ?? '');
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulated API fetching function with delay
  const fetchProductData = async (): Promise<Product[]> => {
    await new Promise((res) => setTimeout(res, 300));
    return Products;
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const products = await fetchProductData();
      setData(products);
      setLoading(false);
    };
    loadData();
  }, []);

  const list = useMemo(() => {
    if (!searchText) return data;
    const q = searchText.toLowerCase();
    return data.filter((p) => p.name.toLowerCase().includes(q));
  }, [searchText, data]);

  return {
    navigation,
    cart,
    searchText,
    setSearchText,
    loading,
    list,
  };
};
