import React, { useContext } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const products = [
  { id: '1', name: 'Product 1', price: 34 },
  { id: '2', name: 'Product 2', price: 43 },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/100' }} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button title={`Checkout (${cart.length})`} onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  product: { marginBottom: 20, alignItems: 'center' },
  image: { width: 100, height: 100, backgroundColor: '#ddd' },
});

export default HomeScreen;
