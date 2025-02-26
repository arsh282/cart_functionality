import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'P1', price: 10 },
  { id: 2, name: 'P2', price: 15 },
  { id: 3, name: 'P3', price: 20 },
  { id: 4, name: 'P4', price: 25 },
];

const HomeScreen = () => {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={addToCart} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
