import firestore from '@react-native-firebase/firestore';
import type { AdminDoc } from '../types/models';

export async function fetchAdminProfile(adminId: string): Promise<AdminDoc | null> {
  const docSnap = await firestore().collection('admins').doc(adminId).get();
  return docSnap.exists() ? ({ adminId: docSnap.id, ...docSnap.data() } as AdminDoc) : null;
}
