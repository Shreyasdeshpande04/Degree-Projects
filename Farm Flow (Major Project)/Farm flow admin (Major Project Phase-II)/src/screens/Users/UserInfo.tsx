import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import type { MainStackParamList } from '../../navigation/types';

type UserInfoRouteProp = RouteProp<MainStackParamList, 'UserInfo'>;

const UserInfo = () => {
  const route = useRoute<UserInfoRouteProp>();
  const { user } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Order Information</Text>

      <View style={styles.card}>
        <CustomField label="Name" value={user.name ?? 'N/A'} />
        <CustomField label="Order ID" value={user.orderId ?? 'N/A'} />
        <CustomField label="Product Name" value={user.productName ?? 'N/A'} />
        <CustomField
          label="Status"
          value={user.status ?? 'Pending'}
          color={user.status === 'Shipped' ? 'green' : 'orange'}
        />
        <CustomField label="Price" value={`Rs.${user.price.toFixed(2)}`} />
        <CustomField label="Address" value={user.address ?? 'N/A'} multiline />
      </View>
    </ScrollView>
  );
};

type CustomFieldProps = {
  label: string;
  value: string;
  color?: string;
  multiline?: boolean;
};

const CustomField: React.FC<CustomFieldProps> = ({ label, value, color = '#000', multiline = false }) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={[styles.input, { color }]}
      value={value}
      editable={false}
      multiline={multiline}
      selectTextOnFocus={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f6f8',
    flexGrow: 1,
  },
  title: {
    marginTop:80,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  fieldContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#666',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default UserInfo;
