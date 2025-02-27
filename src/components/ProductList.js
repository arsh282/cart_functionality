import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductList = ({ products, addToCart }) => (
  <>
    {products.map((item) => (
      <View key={item.id} style={styles.product}>
        <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/100' }} />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
        <Button title="Add to Cart" onPress={() => addToCart(item)} />
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  product: { marginBottom: 20, alignItems: 'center' },
  image: { width: 100, height: 100, backgroundColor: '#ddd' },
});

export default ProductList;
