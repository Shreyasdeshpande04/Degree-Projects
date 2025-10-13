import firestore from '@react-native-firebase/firestore';
import type { SellerApplicationDoc } from '../types/models';

export async function fetchPendingSellerApplications(): Promise<(SellerApplicationDoc & { id: string })[]> {
  const snapshot = await firestore()
    .collection('sellerApplications')
    .where('status', '==', 'pending')
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as SellerApplicationDoc) }));
}

export async function approveSellerApplication(docId: string, adminId: string): Promise<void> {
  const now = firestore.FieldValue.serverTimestamp();


  const appDoc = await firestore().collection('sellerApplications').doc(docId).get();
  if (!appDoc.exists) throw new Error('Application not found');
  const application = appDoc.data() as SellerApplicationDoc;
  const uid = application.uid || docId;

 
  await firestore().collection('sellerApplications').doc(docId).update({
    status: 'approved',
    rejectionReason: '',
    reviewedAt: now,
    reviewedBy: adminId,
  });

 
  const sellerData = {
    ...application,
    status: 'approved',
    approvedAt: now,
    approvedBy: adminId,
  };

 
  await firestore()
    .collection('users')
    .doc(uid)
    .collection('sellerDetails')
    .doc('main')
    .set(sellerData, { merge: true });

  
  await firestore()
    .collection('approvedSellers')
    .doc(uid)
    .set(sellerData, { merge: true });

 
  const profileRef = firestore().collection('users').doc(uid).collection('profile').doc('main');
  const profileSnap = await profileRef.get();
  let newRoles: string[] = [];
  if (profileSnap.exists()) {
    const profileData = profileSnap.data() as { roles?: string[] };
    const currentRoles = Array.isArray(profileData?.roles) ? profileData.roles : ['buyer'];
  
    const filtered = currentRoles.filter(role => role !== 'seller');
    
    filtered.splice(1, 0, 'seller');
    newRoles = filtered;
  } else {
   
    newRoles = ['buyer', 'seller'];
  }
  await profileRef.set({ roles: newRoles }, { merge: true });

 
  await firestore().collection('users').doc(uid).update({
    roles: firestore.FieldValue.arrayUnion('seller'),
  });
}

export async function rejectSellerApplication(docId: string, adminId: string, reason: string): Promise<void> {
  const now = firestore.FieldValue.serverTimestamp();
  await firestore().collection('sellerApplications').doc(docId).update({
    status: 'rejected',
    rejectionReason: reason,
    reviewedAt: now,
    reviewedBy: adminId,
  });
}
