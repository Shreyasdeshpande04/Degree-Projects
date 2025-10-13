import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { fetchOrders} from '../../api/orders';
import type { UserOrder } from '../../types/models';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { MainStackParamList } from '../../navigation/types'; // Adjust the path as needed

type NavigationProp = StackNavigationProp<MainStackParamList, 'Drawer'>;

export default function OrderListScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [users, setUsers] = useState<UserOrder[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserOrder[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchOrdersdata = async () => {
    setLoading(true);
    try {
      const data = await fetchOrders();
      setUsers(data);
      setFilteredUsers(data); // for search
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrdersdata();
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = users.filter(user =>
      user.orderId?.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleUserPress = (user: UserOrder) => {
    // Pass user data if needed: navigation.navigate('UserInfo', { user });
    navigation.navigate('UserInfo', { user });
  };

  const renderItem = ({ item }: { item: UserOrder }) => (
    <TouchableOpacity style={styles.userItem} onPress={() => handleUserPress(item)}>
      <Image
        source={require('../../../assets/person1.png')}
        style={styles.userImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name ?? 'No Name'}</Text>
        <Text style={styles.userMessage}>{item.orderId ?? 'No OrderId Found'}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Order Id"
          value={search}
          onChangeText={handleSearch}
          placeholderTextColor="#A0AEC0"
        />
      </View>

      {/* User List with Pull-to-Refresh */}
      {loading && users.length === 0 ? (
        <ActivityIndicator size="large" color="#e0f7fa" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onRefresh={fetchOrdersdata}
          refreshing={loading}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingTop: 40,
  },
  searchContainer: {
    marginBottom: 16,
    marginTop: 16,
  },
  searchInput: {
    backgroundColor: '#F7FAFC',
    borderRadius: 8,
    padding: 10,
    paddingLeft: 16,
    fontSize: 16,
    color: '#4A5568',
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#f7fafc',
    padding: 8,
    elevation: 1,
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  userMessage: {
    fontSize: 14,
    color: '#A0AEC0',
  },
});