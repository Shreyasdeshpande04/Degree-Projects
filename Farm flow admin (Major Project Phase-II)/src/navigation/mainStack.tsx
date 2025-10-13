import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdminDrawer from './AdminDrawer';
import UserInfoScreen from '../screens/Users/UserInfo';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={AdminDrawer} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} />
    </Stack.Navigator>
  );
}