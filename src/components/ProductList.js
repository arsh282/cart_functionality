import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductList = ({ product, addToCart }) => {
  return (
    <View style={styles.productCard}>
      <Text>{product.name} - ${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductList;
