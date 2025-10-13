// HomeScreenUI.tsx
import React from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Text,
  TouchableOpacity,
} from "react-native";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ProductCard from "./ProductCard";
import homeScreenStyles from "./HomeScreenStyles";

type HomeScreenUIProps = {
  insets: { bottom: number };
  items: string[];
  loading: boolean;
  refreshing: boolean;
  gradientOpacity: number;
  loadMoreItems: () => void;
  onRefresh: () => void;
  handleScroll: (e: any) => void;
};

const HomeScreenUI: React.FC<HomeScreenUIProps> = ({
  insets,
  items,
  loading,
  refreshing,
  gradientOpacity,
  loadMoreItems,
  onRefresh,
  handleScroll,
}) => {
  const renderHeader = () => (
    <>
      <SectionOne gradientOpacity={gradientOpacity} />
      <SectionTwo />
      <View style={homeScreenStyles.popularHeader}>
        <Text style={homeScreenStyles.popularHeaderText}>Farmer's Fresh Picks for You</Text>
        <TouchableOpacity style={homeScreenStyles.arrowButton} />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={homeScreenStyles.popularProductsContainer}
        data={Array.from({ length: 4 })}
        renderItem={() => <ProductCard />}
        keyExtractor={(_, index) => index.toString()}
      />
    </>
  );

  return (
    <View style={[homeScreenStyles.container, { paddingBottom: insets.bottom }]}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={homeScreenStyles.itemContainer}>
            <Text style={homeScreenStyles.itemText}>{item}</Text>
          </View>
        )}
        ListHeaderComponent={renderHeader}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.5}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListFooterComponent={loading ? <ActivityIndicator style={{ margin: 10 }} /> : null}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default HomeScreenUI;
