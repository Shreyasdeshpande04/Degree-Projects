// SearchLogic.ts
import { useState, useRef, useEffect } from 'react';
import { Keyboard, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootParamList } from '../../navigation/types';

export const useSearchLogic = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    console.log('[SearchScreen] Mounted');
    return () => {
      console.log('[SearchScreen] Unmounted');
    };
  }, []);

  const handlePress = () => {
    console.log('[SearchScreen] Search bar tapped');
    setIsEditable(true);
    setTimeout(() => {
      console.log('[SearchScreen] Focus input');
      inputRef.current?.focus();
    }, 100);
  };

  const handleSearchSubmit = () => {
    const trimmedQuery = searchQuery.trim();
    console.log(`[SearchScreen] Submitted query: "${trimmedQuery}"`);

    if (trimmedQuery.length > 0) {
      Keyboard.dismiss();
      console.log('[SearchScreen] Navigating to ProductListingScreen with query');
      navigation.navigate('ProductListingScreen', {
        query: trimmedQuery,
      });
    } else {
      console.warn('[SearchScreen] Empty search query submitted');
      Alert.alert('Search Required', 'Please enter a search query.');
    }
  };

  const handleChangeText = (text: string) => {
    console.log(`[SearchScreen] Search input changed: "${text}"`);
    setSearchQuery(text);
  };

  return {
    isEditable,
    setIsEditable,
    searchQuery,
    setSearchQuery,
    inputRef,
    handlePress,
    handleSearchSubmit,
    handleChangeText,
  };
};
