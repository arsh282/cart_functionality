import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { CartContext } from "../context/CartContext";

const ProductList = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={{ padding: 10, alignItems: "center", borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 18 }}>{product.name}</Text>
      <Text style={{ color: "gray" }}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductList;
