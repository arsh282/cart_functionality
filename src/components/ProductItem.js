import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductItem;
