// CheckoutDetailsUI.tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TopBar from './TopBar';
import ProductCard from './productCard/ProductCard';
import CheckoutButton from './CheckoutButton';
import CurrencyDisplay from './Currency';
import type { UserAddress } from '../../navigation/types';

type AddressSectionProps = {
  userAddress: UserAddress | null;
  loading: boolean;
  onChangeAddress: () => void;
};

const AddressSection: React.FC<AddressSectionProps> = ({ userAddress, loading, onChangeAddress }) => (
  <View style={styles.addressSection}>
    {loading ? (
      <ActivityIndicator size="large" color="#6a994e" style={{ marginVertical: 24 }} />
    ) : userAddress ? (
      <View style={styles.addressCard}>
        <View style={styles.changeRow}>
          <Text style={styles.label}>Deliver to this address</Text>
          <Text style={styles.changeBtn} onPress={onChangeAddress}>Change</Text>
        </View>
        <View style={styles.addressRow}>
          <MaterialIcons name="location-on" size={28} color="#6a994e" style={styles.icon} />
          <View style={styles.addressInfo}>
            <Text style={styles.nameText}>{userAddress.name}</Text>
            <Text style={styles.addressText}>{userAddress.address}</Text>
          </View>
          <Text style={styles.defaultBadge}>Default</Text>
        </View>
      </View>
    ) : (
      <Text style={styles.noAddress}>No address found.</Text>
    )}
  </View>
);

type CheckoutDetailsUIProps = {
  product: any;
  quantity: number;
  unitLabel: string;
  userAddress: UserAddress | null;
  loading: boolean;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  handleCheckout: () => void;
  handleChangeAddress: () => void;
  handleBack: () => void;
  formatCurrency: (amount: number) => string;
};

const CheckoutDetailsUI: React.FC<CheckoutDetailsUIProps> = ({
  product,
  quantity,
  unitLabel,
  userAddress,
  loading,
  increaseQuantity,
  decreaseQuantity,
  handleCheckout,
  handleChangeAddress,
  handleBack,
  formatCurrency,
}) => (
  <SafeAreaView style={styles.safeArea}>
    <TopBar onBack={handleBack} title="Order Summary" />
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <AddressSection
        userAddress={userAddress}
        loading={loading}
        onChangeAddress={handleChangeAddress}
      />
      <ProductCard
        product={product}
        quantity={quantity}
        formatCurrency={formatCurrency}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        unitLabel={unitLabel}
      />
    </ScrollView>
    <View style={styles.bottomRow}>
      <View>
        <CurrencyDisplay
          totalPrice={product.price * quantity}
          formatCurrency={formatCurrency}
        />
      </View>
      <View style={{ flex: 1, marginLeft: 8 }}>
        <CheckoutButton handleCheckout={handleCheckout} />
      </View>
    </View>
  </SafeAreaView>
);

export default CheckoutDetailsUI;

// --- Styles ---
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6FFF2' },
  scrollView: { flex: 1, paddingHorizontal: 16 },
  scrollContent: { paddingVertical: 16, paddingBottom: 100 },
  addressSection: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  addressCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  changeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: { fontSize: 13, color: '#5a7d4c' },
  changeBtn: {
    color: '#6a994e',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 4,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: { marginRight: 12 },
  addressInfo: { flex: 1 },
  nameText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    marginBottom: 2,
  },
  addressText: { fontSize: 15, color: '#444' },
  defaultBadge: {
    backgroundColor: '#eafbe7',
    color: '#6a994e',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginLeft: 10,
  },
  noAddress: { color: '#888', marginTop: 12 },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 8,
  },
});
