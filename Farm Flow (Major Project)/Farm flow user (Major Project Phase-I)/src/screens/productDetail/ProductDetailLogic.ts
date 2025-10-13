// ProductDetailLogic.ts
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import { Product, Products } from './products';

export const useProductDetailLogic = (productId?: string) => {
  const { addToCart, cart } = useContext(CartContext);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [imgIndex, setImgIndex] = useState(0);

  // Simulate async fetch
  const fetchProductData = async (): Promise<Product[]> => {
    await new Promise((res) => setTimeout(res, 300));
    return Products;
  };

  useEffect(() => {
    let isMounted = true;
    const loadProduct = async () => {
      setLoading(true);
      try {
        const products = await fetchProductData();
        if (isMounted) {
          setProduct(products.find(p => p.id === productId));
        }
      } catch {
        if (isMounted) setProduct(undefined);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    if (productId) {
      loadProduct();
    } else {
      setLoading(false);
      setProduct(undefined);
    }
    return () => { isMounted = false; };
  }, [productId]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.images[0],
      originalPrice: product.originalPrice,
      deliveryDate: product.deliveryUpto,
    });
  };

  return {
    product,
    loading,
    imgIndex,
    setImgIndex,
    cartCount: cart.length,
    handleAddToCart,
  };
};
