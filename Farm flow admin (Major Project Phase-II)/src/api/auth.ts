import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export async function adminLogin(email: string, password: string) {
  const userCredential = await auth().signInWithEmailAndPassword(email, password);
  const adminDoc = await firestore().collection('admins').doc(userCredential.user.uid).get();
  if (!adminDoc.exists) {
    await auth().signOut();
    throw new Error('Not an admin account');
  }
  return userCredential.user;
}
