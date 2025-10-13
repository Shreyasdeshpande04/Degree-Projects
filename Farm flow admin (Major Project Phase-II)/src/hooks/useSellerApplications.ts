import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import type { SellerApplicationDoc } from '../types/models';

export function useSellerApplications() {
  const [applications, setApplications] = useState<(SellerApplicationDoc & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('sellerApplications')
      .where('status', '==', 'pending')
      .onSnapshot(snapshot => {
        setApplications(snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as SellerApplicationDoc) })));
        setLoading(false);
      });
    return () => unsubscribe();
  }, []);

  return { applications, loading };
}
