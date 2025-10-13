import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.btn, disabled && styles.disabled]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#2874F0', padding: 12, borderRadius: 6, alignItems: 'center', marginVertical: 8 },
  text: { color: '#fff', fontWeight: 'bold' },
  disabled: { opacity: 0.5 },
});
