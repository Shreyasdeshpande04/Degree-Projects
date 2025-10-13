import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { useSellerApplications } from '../../hooks/useSellerApplications';
import { approveSellerApplication, rejectSellerApplication } from '../../api/sellerApplications';
import auth from '@react-native-firebase/auth';

export default function AdminPanelSellerApplications() {
  const { applications, loading } = useSellerApplications();
  const [selected, setSelected] = useState<any | null>(null);
  const [rejectReason, setRejectReason] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const adminId = auth().currentUser?.uid ?? '';

  const handleApprove = async (app: any) => {
    if (!adminId) return Alert.alert('Not logged in as admin');
    setActionLoading(true);
    try {
      await approveSellerApplication(app.id, adminId); // Use app.id!
      Alert.alert('Application Approved', `Seller UID: ${app.userId}`);
      setSelected(null);
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
    setActionLoading(false);
  };

  const handleReject = async (app: any, reason: string) => {
    if (!adminId) return Alert.alert('Not logged in as admin');
    if (!reason) return Alert.alert('Please enter a rejection reason');
    setActionLoading(true);
    try {
      await rejectSellerApplication(app.id, adminId, reason); // Use app.id!
      Alert.alert('Application Rejected', `Seller UID: ${app.userId}`);
      setSelected(null);
      setRejectReason('');
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
    setActionLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2874F0" />
        <Text style={{ marginTop: 8, color: '#888' }}>Loading applications...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pending Seller Applications</Text>
      {applications.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>No pending applications 🎉</Text>
        </View>
      ) : (
        <FlatList
          data={applications}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => setSelected(item)}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.ref}>Ref: {item.userId}</Text>
                <Text style={styles.name}>{item.businessName}</Text>
                <Text style={styles.type}>{item.businessType}</Text>
              </View>
              <Text style={styles.viewDetails}>View Details &gt;</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 32 }}
        />
      )}

      {/* Modal for details */}
      <Modal
        visible={!!selected}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setSelected(null);
          setRejectReason('');
        }}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modal}>
            <Text style={styles.modalHeader}>Application Details</Text>
            <Text style={styles.modalRef}>Reference #: {selected?.userId}</Text>
            <Text style={styles.label}>Business Name:</Text>
            <Text style={styles.value}>{selected?.businessName}</Text>
            <Text style={styles.label}>Type:</Text>
            <Text style={styles.value}>{selected?.businessType}</Text>
            <Text style={styles.label}>GSTIN:</Text>
            <Text style={styles.value}>{selected?.gstin}</Text>
            <Text style={styles.label}>PAN:</Text>
            <Text style={styles.value}>{selected?.pan}</Text>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{selected?.businessAddress}</Text>
            <Text style={styles.label}>Contact:</Text>
            <Text style={styles.value}>{selected?.contactNumber}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{selected?.businessEmail}</Text>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.value}>{selected?.description}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.approveButton]}
                onPress={() => handleApprove(selected)}
                disabled={actionLoading}
              >
                <Text style={styles.buttonText}>Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.rejectButton]}
                onPress={() => handleReject(selected, rejectReason)}
                disabled={actionLoading}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Rejection reason (required for reject)"
              value={rejectReason}
              onChangeText={setRejectReason}
              style={styles.input}
              editable={!actionLoading}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                setSelected(null);
                setRejectReason('');
              }}
              disabled={actionLoading}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            {actionLoading && (
              <ActivityIndicator size="small" color="#2874F0" style={{ marginTop: 8 }} />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 22,
    color: '#2874F0',
    letterSpacing: 0.5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    marginVertical: 10,
    borderRadius: 12,
    elevation: Platform.OS === 'android' ? 2 : 0,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  ref: {
    color: '#2563eb',
    marginBottom: 2,
    fontSize: 13,
    fontWeight: '500',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  type: {
    fontSize: 15,
    color: '#666',
    marginBottom: 2,
  },
  viewDetails: {
    color: '#2874F0',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 18,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#888',
    fontSize: 18,
    marginTop: 40,
    textAlign: 'center',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(30,40,60,0.16)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  modal: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: Platform.OS === 'android' ? 4 : 0,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2874F0',
    marginBottom: 8,
  },
  modalRef: {
    color: '#2563eb',
    fontWeight: '500',
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    color: '#888',
    marginTop: 6,
    marginBottom: 1,
  },
  value: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    marginBottom: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  approveButton: {
    backgroundColor: '#43b581',
  },
  rejectButton: {
    backgroundColor: '#e53e3e',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginVertical: 10,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#f9f9f9',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
    padding: 8,
    borderRadius: 6,
  },
  closeButtonText: {
    color: '#2874F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
