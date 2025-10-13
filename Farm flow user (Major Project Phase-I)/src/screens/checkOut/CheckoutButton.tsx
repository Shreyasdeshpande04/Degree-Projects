import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface CheckoutButtonProps {
  handleCheckout: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ handleCheckout }) => {
  return (
    <TouchableOpacity
      onPress={handleCheckout}
      activeOpacity={0.9}
      accessibilityLabel="Proceed to Checkout"
      accessibilityRole="button"
    >
      <LinearGradient
        colors={['#43A047', '#2E7D32']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.checkoutButton}
      >
        <Text style={styles.checkoutButtonText}>Place Order</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkoutButton: {
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    // marginTop: 10,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});

export default CheckoutButton;
