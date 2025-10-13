import auth from '@react-native-firebase/auth';

/**
 * Logs out the currently authenticated user (admin).
 */
export async function adminLogout() {
  try {
    await auth().signOut();
    console.log('Admin logged out successfully');
  } catch (error) {
    console.error('Logout failed:', error);
    throw new Error('Logout failed');
  }
}
