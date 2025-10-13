import React, { useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { adminLogin } from '../../api/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

type AuthStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

type LoginScreenProps = {
  navigation: StackNavigationProp<AuthStackParamList, 'Login'>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await adminLogin(email, password);
      navigation.replace('Dashboard');
    } catch (e) {
      const error = e as Error;
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} disabled={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center', color: '#2874F0' },
});
