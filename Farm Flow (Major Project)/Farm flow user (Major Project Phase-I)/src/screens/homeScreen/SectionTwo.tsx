// SectionTwo.tsx
import React from "react";
import { View, ScrollView, Image } from "react-native";
import Category from "./Category";
import homeScreenStyles from "./HomeScreenStyles";
import IMAGES from "../../assets/icons";
import APP_CONSTANTS from "../../strings/appConstants";

// Utility: chunk array into columns
const chunkIntoColumns = (arr: string[], size = 2) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const categoryColumns = chunkIntoColumns(APP_CONSTANTS.CATEGORY_CONSTANTS.ALL_CATEGORIES, 2);

const SectionTwo = () => (
  <>
    <DownArrowIcon />
    <Banner />
    <PopularCategories />
  </>
);

export default SectionTwo;

// Subcomponents

const DownArrowIcon = () => (
  <View style={homeScreenStyles.iconWrapper}>
    <Image source={IMAGES.DOWN} style={homeScreenStyles.downIcon} />
  </View>
);

const Banner = () => (
  <View style={homeScreenStyles.bannerContainer}>
    <View style={homeScreenStyles.bannerImage} />
  </View>
);

const PopularCategories = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={homeScreenStyles.popularCategoriesContainer}
    contentContainerStyle={homeScreenStyles.categoriesContainer}
  >
    {categoryColumns.map((column, colIndex) => (
      <CategoryColumn key={colIndex} column={column} />
    ))}
  </ScrollView>
);

const CategoryColumn = ({ column }: { column: string[] }) => (
  <View style={homeScreenStyles.categoryColumn}>
    {column.map((title, rowIndex) => (
      <Category key={rowIndex} title={title} />
    ))}
  </View>
);
