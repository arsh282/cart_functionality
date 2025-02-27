// components/ProductCard.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductCard = ({ product, addToCart }) => {
  return (
    <View style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Basket" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductCard;
