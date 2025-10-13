import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getAllVerificationRecords, User } from '../../api/users';

const UserListScreen = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllVerificationRecords();
      setUsers(data);
      setFilteredUsers(data); // for search
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = users.filter(user =>
      user.email?.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.userItem}>
      <Image
        source={require('../../../assets/person1.png')}
        style={styles.userImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name ?? 'No Name'}</Text>
        <Text style={styles.userMessage}>{item.email ?? 'No Email'}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by email"
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
          onRefresh={fetchUsers}
          refreshing={loading}
        />
      )}
    </View>
  );
};

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

export default UserListScreen;
