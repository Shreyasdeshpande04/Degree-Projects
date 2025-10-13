import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet, Alert, View, TouchableOpacity } from 'react-native';
import { fetchCategories, deleteCategory } from '../../api/categories';
import CategoryCard from '../../components/CategoryCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { CategoryDoc } from '../../types/models';

export default function CategoryListScreen({ navigation }: { navigation: any }) {
  const [categories, setCategories] = useState<(CategoryDoc & { id: string })[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadCategories = async () => {
    setRefreshing(true);
    setCategories(await fetchCategories());
    setRefreshing(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleDelete = (id: string) => {
    Alert.alert('Delete Category', 'Are you sure you want to delete this category?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete', style: 'destructive', onPress: async () => {
          await deleteCategory(id);
          loadCategories();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('CategoryForm')}
        >
          <Text style={styles.addBtnText}>+ Add Category</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        refreshing={refreshing}
        onRefresh={loadCategories}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            onEdit={() => navigation.navigate('CategoryForm', { category: item })}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyIcon}>📂</Text>
            <Text style={styles.empty}>No categories found.</Text>
          </View>
        }
        contentContainerStyle={categories.length === 0 ? { flex: 1, justifyContent: 'center' } : undefined}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#f4f8fb' },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2874F0', letterSpacing: 0.5 },
  addBtn: { backgroundColor: '#2874F0', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 8 },
  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  emptyWrap: { alignItems: 'center', marginTop: 40 },
  emptyIcon: { fontSize: 48, marginBottom: 8 },
  empty: { textAlign: 'center', color: '#888', fontSize: 17 },
});
