import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryListScreen from '../screens/Categories/CategoryListScreen';
import CategoryFormScreen from '../screens/Categories/CategoryFormScreen';

const Stack = createStackNavigator();

export default function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoryList" component={CategoryListScreen} options={{ title: 'Categories' }} />
      <Stack.Screen name="CategoryForm" component={CategoryFormScreen} options={{ title: 'Add/Edit Category' }} />
    </Stack.Navigator>
  );
}
