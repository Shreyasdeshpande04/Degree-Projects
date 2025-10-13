// ChangeAddressLogic.ts
import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootParamList } from '../../navigation/types';

export function useChangeAddressLogic() {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    if (!name || !address) {
      Alert.alert('Please fill in both fields');
      return;
    }
    navigation.navigate('CheckoutDetailsScreen', {
      updatedAddress: { name, address },
    });
  };

  return {
    name,
    setName,
    address,
    setAddress,
    handleSave,
  };
}
