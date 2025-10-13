import firestore from '@react-native-firebase/firestore';

export interface User {
  id: string;
  email?: string;
  name?: string;
}

export const getAllVerificationRecords = async (): Promise<User[]> => {
  try {
    const snapshot = await firestore()
      .collection('userVerificationRecords')
      .get();

    const users: User[] = [];

    for (const doc of snapshot.docs) {
      const data = doc.data();
      users.push({
        id: doc.id,
        email: data.email,
        name:data.displayName,
      });
    }

    return users;
  } catch (error) {
    console.error('Error fetching verification records:', error);
    return [];
  }
};

























// // Utility to decode Base64 user IDs (adjust if you use a different encoding)
// function decodeUserId(encodedId: string): string {
//   try {
//     return Buffer.from(encodedId, 'base64').toString('utf8');
//   } catch {
//     return encodedId; // fallback if not valid base64
//   }
// }

// // Fetch all users from users/{uid}/profile/main
// export async function fetchAllUsers(): Promise<(UserDoc & { id: string; decodedId: string })[]> {
//   // Log the project ID for debugging
//   try {
//     // Only import here to avoid circular import issues
//     const firebase = require('@react-native-firebase/app').default;
//     console.log('Project ID:', firebase.app().options.projectId);
//   } catch (e) {
//     // Ignore if not available
//   }

//   const usersSnap = await firestore().collection('users').get();
//   console.log('Users collection docs count:', usersSnap.size);

//   const users = await Promise.all(usersSnap.docs.map(async (userDoc) => {
//     const decodedId = decodeUserId(userDoc.id);
//     console.log('User doc found:', userDoc.id, `(decoded: ${decodedId})`, userDoc.data());

//     const profileDoc = await firestore()
//       .collection('users')
//       .doc(userDoc.id)
//       .collection('profile')
//       .doc('main')
//       .get();

//     if (!profileDoc.exists) {
//       console.warn(`Profile/main document missing for user ${userDoc.id}`);
//     } else {
//       console.log(`User ${userDoc.id} profile data:`, profileDoc.data());
//     }

//     return {
//       id: userDoc.id,
//       decodedId,
//       ...(profileDoc.exists() ? profileDoc.data() : {}),
//     } as UserDoc & { id: string; decodedId: string };
//   }));

//   console.log('Fetched user profiles:', users);
//   return users;
// }
