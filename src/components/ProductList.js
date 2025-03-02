import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const ProductList = ({ product, onAddToCart }) => {
  return (
    <View style={styles.product}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ProductList;
