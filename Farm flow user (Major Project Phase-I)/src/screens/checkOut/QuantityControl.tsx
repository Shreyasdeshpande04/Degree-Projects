import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface QuantityControlProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <View style={styles.quantityContainer}>
      <Text style={styles.qtyLabel}>Quantity:</Text>
      <View style={styles.qtyControl}>
        <TouchableOpacity
          style={[styles.qtyButton, quantity === 1 && styles.qtyButtonDisabled]}
          onPress={decreaseQuantity}
          disabled={quantity === 1}
        >
          <Text style={styles.qtyButtonText}>−</Text>
        </TouchableOpacity>
        <Text style={styles.qtyValue}>{quantity}</Text>
        <TouchableOpacity
          style={[styles.qtyButton, quantity === 3 && styles.qtyButtonDisabled]}
          onPress={increaseQuantity}
          disabled={quantity === 3}
        >
          <Text style={styles.qtyButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  qtyLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginRight: 12,
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3949AB',
    borderRadius: 8,
    backgroundColor: '#E3F2FD',
  },
  qtyButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#3949AB',
  },
  qtyButtonDisabled: {
    backgroundColor: '#9FA8DA',
  },
  qtyButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  qtyValue: {
    minWidth: 30,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#1A237E',
    paddingHorizontal: 8,
  },
});

export default QuantityControl;
