import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#888"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
    color: '#222',
  },
});
