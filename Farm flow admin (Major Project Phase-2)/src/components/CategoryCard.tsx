import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { CategoryDoc } from '../types/models';

type Props = {
  category: CategoryDoc & { id: string };
  onEdit: () => void;
  onDelete: () => void;
};

export default function CategoryCard({ category, onEdit, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{category.label}</Text>
        <Text style={styles.icon}>Icon: <Text style={{ color: '#2874F0' }}>{category.icon}</Text></Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.btnEdit}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.btnDelete}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 18,
    marginVertical: 7,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#2874F0',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  label: { fontWeight: 'bold', fontSize: 17, color: '#222' },
  icon: { color: '#555', marginTop: 3, fontSize: 14 },
  actions: { flexDirection: 'row', marginLeft: 12 },
  btnEdit: { backgroundColor: '#2874F0', padding: 8, borderRadius: 6, marginRight: 8 },
  btnDelete: { backgroundColor: '#d32f2f', padding: 8, borderRadius: 6 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
