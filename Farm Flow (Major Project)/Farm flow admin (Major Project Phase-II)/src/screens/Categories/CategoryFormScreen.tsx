import React, { useState } from 'react';
import { Text, StyleSheet, Alert, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { addCategory, updateCategory } from '../../api/categories';
import type { CategoryDoc } from '../../types/models';

type Props = {
  navigation: any;
  route: { params?: { category?: CategoryDoc & { id: string } } };
};

export default function CategoryFormScreen({ navigation, route }: Props) {
  const editing = !!route.params?.category;
  const [label, setLabel] = useState(route.params?.category?.label || '');
  const [icon, setIcon] = useState(route.params?.category?.icon || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!label || !icon) {
      Alert.alert('Validation', 'Label and Icon are required.');
      return;
    }
    setLoading(true);
    try {
      if (editing) {
        await updateCategory(route.params!.category!.id, { label, icon });
      } else {
        await addCategory({ label, icon });
      }
      navigation.goBack();
    } catch (e) {
      const error = e as Error;
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Text style={styles.title}>{editing ? 'Edit' : 'Add'} Category</Text>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>Label</Text>
          <TextInput
            placeholder="Category Label"
            value={label}
            onChangeText={setLabel}
            style={styles.input}
            placeholderTextColor="#aaa"
            autoFocus
          />
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.label}>Icon</Text>
          <TextInput
            placeholder="Icon (e.g., shopping-cart)"
            value={icon}
            onChangeText={setIcon}
            style={styles.input}
            placeholderTextColor="#aaa"
          />
        </View>
        <TouchableOpacity
          style={[styles.button, loading && { backgroundColor: '#b0b0b0' }]}
          onPress={handleSave}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? 'Saving...' : editing ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f4f8fb' },
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#2874F0', alignSelf: 'center' },
  inputWrap: { marginBottom: 16 },
  label: { fontWeight: 'bold', marginBottom: 6, color: '#444', fontSize: 15 },
  input: {
    borderWidth: 1,
    borderColor: '#c5d0e6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#2874F0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#2874F0',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
