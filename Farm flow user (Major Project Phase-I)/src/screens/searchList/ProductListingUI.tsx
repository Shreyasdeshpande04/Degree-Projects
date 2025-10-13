// ProductListingUI.tsx
import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderSearch from '../../HeaderSearch';
import type { Product } from '../../navigation/types';

const { width } = Dimensions.get('window');
const CARD_W = width * 0.94;

type ProductListingUIProps = {
  cartCount: number;
  searchText: string;
  setSearchText: (t: string) => void;
  loading: boolean;
  list: Product[];
  onCartPress: () => void;
  onProductPress: (id: string) => void;
};

const rupee = (n: number) =>
  `₹${n.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

const stars = (rating: number) => {
  const arr = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++)
    arr.push(<Icon key={`f${i}`} name="star" size={14} color="#388e3c" />);
  if (half) arr.push(<Icon key="h" name="star-half" size={14} color="#388e3c" />);
  while (arr.length < 5)
    arr.push(<Icon key={`e${arr.length}`} name="star" size={14} color="#ccc" />);
  return arr;
};

const ProductListingUI: React.FC<ProductListingUIProps> = ({
  cartCount,
  searchText,
  setSearchText,
  loading,
  list,
  onCartPress,
  onProductPress,
}) => {
  // Header cart icon and badge is expected to be set via navigation.setOptions in the screen component

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => onProductPress(item.id)}
    >
      <Image source={{ uri: item.images[0] }} style={styles.img} />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.name}>
          {item.name}
        </Text>
        <View style={styles.rating}>
          {stars(item.rating)}
          <Text style={styles.rateCount}>
            ({Math.floor(Math.random() * 90) + 10})
          </Text>
        </View>
        <View style={styles.priceRow}>
          {item.discountPercentage > 0 && (
            <Text style={styles.discountTxt}>
              <Icon name="arrow-down" size={12} /> {item.discountPercentage}%
            </Text>
          )}
          {item.discountPercentage > 0 && (
            <Text style={styles.original}>{rupee(item.originalPrice)}</Text>
          )}
          <Text style={styles.price}>{rupee(item.price)}</Text>
        </View>
        <Text style={styles.delivery}>
          Free delivery by <Text style={{ fontWeight: '700' }}>{item.deliveryUpto}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSearch
        editable={true}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <View style={styles.sortFilter}>
        <TouchableOpacity style={styles.sortBtn} disabled={true}>
          <Text style={styles.sortTxt}>Sort ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} disabled={true}>
          <Icon name="filter" size={14} color="#2874F0" />
          <Text style={styles.filterTxt}>Filter</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={[styles.noResult, { flex: 1 }]}>
          <ActivityIndicator size="large" color="#388e3c" />
          <Text style={{ marginTop: 10, color: '#666' }}>Loading products...</Text>
        </View>
      ) : !list.length ? (
        <View style={styles.noResult}>
          <Text style={{ fontSize: 16, color: '#666' }}>No products found.</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        />
      )}
      {/* Floating cart button (optional) */}
      <TouchableOpacity
        style={styles.fabCart}
        onPress={onCartPress}
        accessibilityLabel="Go to cart"
        accessibilityRole="button"
      >
        <Icon name="shopping-cart" size={22} color="#fff" />
        {cartCount > 0 && (
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  sortFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    elevation: 2,
    zIndex: 2,
  },
  sortBtn: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  sortTxt: {
    fontSize: 14,
    color: '#333',
  },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7f1ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  filterTxt: {
    color: '#2874F0',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: CARD_W,
    alignSelf: 'center',
    padding: 14,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 3,
  },
  img: { width: 90, height: 90, resizeMode: 'contain', marginRight: 14 },
  info: { flex: 1 },
  name: { fontSize: 14, fontWeight: '500', color: '#222', marginBottom: 6 },
  rating: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  rateCount: { fontSize: 12, color: '#888', marginLeft: 6 },
  priceRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  discountTxt: {
    color: '#388e3c',
    fontWeight: 'bold',
    marginRight: 8,
  },
  original: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 8,
    fontSize: 14,
  },
  price: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  delivery: { fontSize: 13, color: '#555' },
  noResult: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  fabCart: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#2874F0',
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    zIndex: 10,
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#ff5252',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProductListingUI;
