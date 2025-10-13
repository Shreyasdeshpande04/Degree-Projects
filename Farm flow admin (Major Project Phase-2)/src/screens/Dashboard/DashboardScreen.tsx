
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchDashboardData } from '../../api/dashboarddata';
import { useNavigation } from '@react-navigation/native';
import { adminLogout } from '../../api/logout'; 

export default function DashboardScreen() {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [orderCount, setOrderCount] = useState<number | null>(null);
  const [sellerCount, setSellerCount] = useState<number | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    const loadData = async () => {
      const { userCount, orderCount, sellerCount } = await fetchDashboardData();
      setUserCount(userCount);
      setOrderCount(orderCount);
      setSellerCount(sellerCount);
    };

    loadData();
  }, []);

  const handleLogout = async () => {
    try {
      await adminLogout(); 
      navigation.reset({index:0, routes:[{name: 'Login'} as any] }); 
    } catch (error) {
      Alert.alert('Logout Failed', 'Something went wrong during logout.');
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: handleLogout, style: 'destructive' },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>

      {/* Welcome Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome, Admin!</Text>
        <Text style={styles.cardText}>
          Use the menu to manage sellers, users, orders, products, and categories.
        </Text>
      </View>

      {/* Users Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Users</Text>
        {userCount === null ? (
          <ActivityIndicator size="small" color="#2874F0" />
        ) : (
          <Text style={styles.cardText}>{userCount}</Text>
        )}
      </View>

      {/* Orders Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Orders</Text>
        {orderCount === null ? (
          <ActivityIndicator size="small" color="#2874F0" />
        ) : (
          <Text style={styles.cardText}>{orderCount}</Text>
        )}
      </View>

      {/* Sellers Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Sellers</Text>
        {sellerCount === null ? (
          <ActivityIndicator size="small" color="#2874F0" />
        ) : (
          <Text style={styles.cardText}>{sellerCount}</Text>
        )}
      </View>

      {/* Logout Button */}
      <View style={styles.logoutContainer}>
        <Button title="Logout" onPress={confirmLogout} color="#d9534f" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f9fa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#2874F0' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 24,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: { fontWeight: 'bold', fontSize: 18, marginBottom: 8 },
  cardText: { fontSize: 16, color: '#444' },
  logoutContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '60%',
  },
});
