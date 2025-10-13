import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { register } from '../../redux/slices/authSlice'; // Adjust path as needed

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Validation Error', 'Please fill in both fields.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    dispatch(register({ name, email }));
    navigation.replace('Login'); // Navigate to login after registration
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Register" onPress={handleRegister} color="#4CAF50" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
});

export default SignUpScreen;
