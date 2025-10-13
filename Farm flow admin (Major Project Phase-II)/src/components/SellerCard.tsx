import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import type { SellerDoc } from '../types/models';

type SellerCardProps = {
  seller: SellerDoc & { id: string };
  onApprove: () => void;
  onReject: () => void;
};

export default function SellerCard({ seller, onApprove, onReject }: SellerCardProps) {
  const disabled = seller.status !== 'pending';
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{seller.businessName}</Text>
      <Text>GST: {seller.gstNumber}</Text>
      <Text>Status: {seller.status}</Text>
      <View style={styles.actions}>
        <Button title="Approve" onPress={onApprove} disabled={disabled} />
        <Button title="Reject" onPress={onReject} disabled={disabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 16, marginVertical: 8, borderRadius: 8, elevation: 2 },
  title: { fontWeight: 'bold', fontSize: 16 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
});
