export type RootParamList = {
  Splash: undefined;
  Login: undefined;
  HomeTabs: undefined;
  SignUp: undefined;
  SearchScreen: undefined;
  ProductListingScreen: { query?: string };
  CartScreen: undefined;
  ProductDetailScreen: { productId: string };
  // AddressScreen: { product: Product }; // Add this
  CheckoutDetailsScreen: { product: Product; fromOrderFlow?: boolean };
    OrderSuccessScreen: undefined;
    ChangeAddressScreen: undefined;
};

export interface UserAddress {
  name: string;
  address: string;
  // You can also add more fields if needed (e.g., phone, postal code)
  phoneNumber?: string;
  postalCode?: string;
}


export type Product = {
  id: string;
  name: string;
  images: string[];
  price: number;
  originalPrice: number;
  rating: number;
  discountPercentage: number;
  deliveryUpto: string;
  stockLeft?: number;
};

export type RouteParams = {
  productId: string;
};
