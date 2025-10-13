import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../navigation/types';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    console.log('SplashScreen component mounted'); // Log when the SplashScreen is mounted

    setTimeout(() => {
      const isLoggedIn = false;  // Set your actual login condition here
      console.log('Navigating after delay. Is logged in:', isLoggedIn);  // Log the login condition

      // Navigate to HomeTabs instead of Home

      
      // navigation.replace(isLoggedIn ? 'HomeTabs' : 'Login');

            navigation.replace('HomeTabs');


    }, 2000); // 2-second delay for the splash screen
  }, [navigation]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
