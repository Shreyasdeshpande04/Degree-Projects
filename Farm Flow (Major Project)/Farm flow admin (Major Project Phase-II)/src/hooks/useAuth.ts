import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function useAuth(): FirebaseAuthTypes.User | null {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsub = auth().onAuthStateChanged(setUser);
    return () => unsub();
  }, []);

  return user;
}
