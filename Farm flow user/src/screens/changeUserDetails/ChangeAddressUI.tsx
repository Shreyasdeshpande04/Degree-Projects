// ChangeAddressUI.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

type ChangeAddressUIProps = {
  name: string;
  setName: (name: string) => void;
  address: string;
  setAddress: (address: string) => void;
  handleSave: () => void;
};

const ChangeAddressUI: React.FC<ChangeAddressUIProps> = ({
  name,
  setName,
  address,
  setAddress,
  handleSave,
}) => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Change Delivery Address</Text>

    <Text style={styles.label}>Full Name</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter full name"
      value={name}
      onChangeText={setName}
    />

    <Text style={styles.label}>Address</Text>
    <TextInput
      style={[styles.input, { height: 100 }]}
      placeholder="Enter delivery address"
      value={address}
      onChangeText={setAddress}
      multiline
    />

    <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
      <Text style={styles.saveButtonText}>Save Address</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#FFF',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChangeAddressUI;
