import firestore from '@react-native-firebase/firestore';
import type { CategoryDoc } from '../types/models';

// Fetch all categories (admin or public)
export async function fetchCategories(): Promise<(CategoryDoc & { id: string })[]> {
  const snapshot = await firestore().collection('categories').get();
  console.log(snapshot.size)
  return snapshot.docs.map(doc => {
    const data = doc.data() as CategoryDoc;
    return { ...data, id: doc.id };
  });
}

// Add a new category
export async function addCategory(category: Omit<CategoryDoc, 'id'>): Promise<void> {
  const ref = firestore().collection('categories').doc();
  await ref.set({
    ...category,
    id: ref.id,
  });
}

// Update a category
export async function updateCategory(id: string, category: Partial<CategoryDoc>): Promise<void> {
  await firestore().collection('categories').doc(id).update(category);
}

// Delete a category
export async function deleteCategory(id: string): Promise<void> {
  await firestore().collection('categories').doc(id).delete();
}
