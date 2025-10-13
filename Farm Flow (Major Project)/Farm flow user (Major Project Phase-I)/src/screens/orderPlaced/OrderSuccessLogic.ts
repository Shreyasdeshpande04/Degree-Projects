// OrderSuccessLogic.ts
import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function useOrderSuccessLogic() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    // Disable back button temporarily
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);

    const timer = setTimeout(() => {
      // Navigate and replace to prevent going back
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeTabs', params: { screen: 'HomeScreen' } }],
      });
    }, 3000); // 3 seconds

    return () => {
      clearTimeout(timer);
      backHandler.remove(); // Clean up the back handler
    };
  }, [navigation]);
}
