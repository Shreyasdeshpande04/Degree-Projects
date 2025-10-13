// Category.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import homeScreenStyles from "./HomeScreenStyles";

const Category = ({ title }: { title: string }) => (

  <View style={homeScreenStyles.category}>
    {/* <Image
      source={{ uri: "https://via.placeholder.com/50x50.png?text=Cat" }}
      style={homeScreenStyles.categoryImage}
      resizeMode="cover"
    /> */}
          <View style={homeScreenStyles.categoryImage} />

    <Text style={homeScreenStyles.categoryText}>{title}</Text>
  </View>
);

export default Category;
