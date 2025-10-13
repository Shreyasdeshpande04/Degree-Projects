// ProductCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import homeScreenStyles
 from "./HomeScreenStyles";
const ProductCard = () => (
  
  <View style={homeScreenStyles.productCard}>
    <Image
      source={{ uri: "https://via.placeholder.com/100x100.png?text=Product" }}
      style={homeScreenStyles.productImage}
      resizeMode="cover"
    />
        {/* <View style={homeScreenStyles.productImage} /> */}

    {/* <Text style={{ textAlign: "center", marginTop: 8, fontWeight: "bold" }}>Product</Text> */}
  </View>
);

export default ProductCard;
