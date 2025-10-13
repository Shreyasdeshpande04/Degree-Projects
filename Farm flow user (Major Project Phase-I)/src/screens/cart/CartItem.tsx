// CartItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CartItemType } from './CartContext';

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onQuantityChange: (newQuantity: number) => void;
}

const CartItem = ({ item, onRemove, onQuantityChange }: CartItemProps) => {
  const total = item.price * item.quantity;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{item.price.toFixed(0)}</Text>
            {item.originalPrice && item.originalPrice > item.price && (
              <>
                <Text style={styles.originalPrice}> ₹{item.originalPrice.toFixed(0)}</Text>
                <Text style={styles.discountText}>
                  {'  '}
                  {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                </Text>
              </>
            )}
          </View>
          <View style={styles.quantityRow}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => onQuantityChange(Math.max(1, item.quantity - 1))}
              accessibilityLabel={`Decrease quantity of ${item.name}`}
              accessibilityRole="button"
              disabled={item.quantity <= 1}
            >
              <MaterialIcons name="remove" size={18} color={item.quantity <= 1 ? "#ccc" : "#333"} />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => onQuantityChange(item.quantity + 1)}
              accessibilityLabel={`Increase quantity of ${item.name}`}
              accessibilityRole="button"
            >
              <MaterialIcons name="add" size={18} color="#333" />
            </TouchableOpacity>
          </View>
          <Text style={styles.totalText}>Total: ₹{total.toFixed(0)}</Text>
          <Text style={styles.deliveryText}>
            Delivery by {item.deliveryDate || 'Tomorrow'} | <Text style={{ color: '#388e3c' }}>Free</Text>
          </Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        <TouchableOpacity onPress={onRemove} style={styles.actionButton}>
          <Text style={styles.actionText}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 6,
    resizeMode: 'contain',
    backgroundColor: '#f8f8f8',
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: 13,
    color: '#878787',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  discountText: {
    fontSize: 13,
    color: '#388e3c',
    fontWeight: '600',
    marginLeft: 6,
  },
  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  qtyButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#f2f2f2',
  },
  qtyText: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  totalText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    marginTop: 6,
  },
  deliveryText: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  actionButton: {
    paddingHorizontal: 12,
  },
  actionText: {
    color: '#2874F0',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default CartItem;
