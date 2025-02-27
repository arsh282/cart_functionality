import React, { useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CartContext } from '../components/context/CartContext';
import ProductList from '../components/ProductList';

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: '1', name: 'P1', price: 34 },
    { id: '2', name: 'P2', price: 43 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductList product={item} addToCart={addToCart} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default HomeScreen;
