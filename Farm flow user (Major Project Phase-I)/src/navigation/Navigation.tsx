import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import SignUpScreen from '../screens/signUpScreen/SignUpScreen';
import SearchScreen from '../screens/search/SearchScreen';
import ProductListingScreen from '../screens/searchList/ProductListingScreen';
import CartScreen from '../screens/cart/CartScreen';
import HomeTabs from './HomeTabs';
import { RootParamList } from './types';
import ProductDetailScreen from '../screens/productDetail/ProductDetailScreen';
import CheckoutDetailsScreen from '../screens/checkOut/CheckoutDetailsScreen';
import OrderSuccessScreen from '../screens/orderPlaced/OrderSuccessScreen';
import ChangeAddressScreen from '../screens/changeUserDetails/ChangeAddressScreen';

const Stack = createNativeStackNavigator<RootParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          listeners={{ focus: () => console.log('Splash Screen focused') }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          listeners={{ focus: () => console.log('Login Screen focused') }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          listeners={{ focus: () => console.log('SignUp Screen focused') }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          listeners={{ focus: () => console.log('HomeTabs Screen focused') }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          listeners={{ focus: () => console.log('Search Screen focused') }}
        />
        <Stack.Screen
          name="ProductListingScreen"
          component={ProductListingScreen}
          listeners={{ focus: () => console.log('ProductListingScreen focused') }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          listeners={{ focus: () => console.log('CartScreen focused') }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          listeners={{ focus: () => console.log('ProductDetailScreen focused') }}
        />
        <Stack.Screen
          name="CheckoutDetailsScreen"
          component={CheckoutDetailsScreen}
          listeners={{ focus: () => console.log('CheckoutDetailsScreen focused') }}
        />
        <Stack.Screen name="OrderSuccessScreen" 
        component={OrderSuccessScreen} 
        listeners={{ focus: () => console.log('OrderSuccessScreen focused') }}
        />
        <Stack.Screen name="ChangeAddressScreen"
        component={ChangeAddressScreen}
        listeners={{ focus: () => console.log('OrderSuccessScreen focused') }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
