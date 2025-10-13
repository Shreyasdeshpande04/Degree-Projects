// CategoryUI.tsx
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { categoryData } from './categoryData';
import { SectionLayout } from './CategoryLogic';

const LEFT_WIDTH = 100;

type CategoryUIProps = {
  selectedIndex: number;
  scrollViewRef: React.RefObject<ScrollView>;
  categoryRefs: React.MutableRefObject<Array<any>>;
  handleCategoryLayout: (idx: number) => (event: any) => void;
  scrollToCategory: (idx: number) => void;
  handleScroll: (event: any) => void;
};

export const CategoryUI: React.FC<CategoryUIProps> = ({
  selectedIndex,
  scrollViewRef,
  categoryRefs,
  handleCategoryLayout,
  scrollToCategory,
  handleScroll,
}) => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Categories</Text>
    </View>
    {/* Body */}
    <View style={styles.content}>
      {/* LEFT: Category list */}
      <View style={styles.leftPane}>
        <FlatList
          data={categoryData}
          keyExtractor={(item) => item.label}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedIndex === index && styles.selectedCategoryButton,
              ]}
              onPress={() => scrollToCategory(index)}
            >
              <Icon
                name={item.icon}
                size={22}
                color={selectedIndex === index ? '#4CAF50' : '#555'}
                style={styles.iconStyle}
              />
              <Text
                style={[
                  styles.categoryLabel,
                  selectedIndex === index && styles.selectedCategoryLabel,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* RIGHT: All categories and items in a single ScrollView */}
      <ScrollView
        style={styles.rightPane}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        {categoryData.map((category, idx) => (
          <View
            key={category.label}
            ref={el => { categoryRefs.current[idx] = el; }}
            onLayout={handleCategoryLayout(idx)}
          >
            <Text style={styles.categoryHeader}>{category.label}</Text>
            <View style={styles.itemRow}>
              {category.items.map((item, i) => (
                <TouchableOpacity key={i} style={styles.itemCard}>
                  <Image source={{ uri: item.image }} style={styles.itemImage} />
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: {
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
    backgroundColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  content: {
    flexDirection: 'row',
    flex: 1,
  },
  leftPane: {
    width: LEFT_WIDTH,
    backgroundColor: '#FAFAFA',
    borderRightWidth: 0.5,
    borderRightColor: '#CCC',
    paddingVertical: 12,
  },
  categoryButton: {
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  selectedCategoryButton: {
    backgroundColor: '#c0e3aa',
    borderLeftWidth: 3,
    borderLeftColor: '#4CAF50',
  },
  categoryLabel: {
    fontSize: 13,
    textAlign: 'center',
    color: '#555',
  },
  selectedCategoryLabel: {
    color: '#4CAF50',
  },
  iconStyle: {
    marginBottom: 6,
  },
  rightPane: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 12,
  },
  scrollViewContent: {
    paddingBottom: 16,
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
});
