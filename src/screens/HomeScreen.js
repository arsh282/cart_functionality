
import React, { useContext } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const products = [
  { id: 1, name: 'Apple', price: 34, image: require('../../assets/apple.jpeg') },
  { id: 12, name: 'Banana', price: 23, image: require('../../assets/banana.jpg') },
  { id: 3, name: 'Banana', price: 23, image: require('../../assets/banana.jpg') },
  { id: 4, name: 'Banana', price: 23, image: require('../../assets/banana.jpg') },

];

const HomeScreen = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grocery Shop</Text>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Ensure unique keys
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Cart Count Below Products */}
      <View style={styles.cartCountContainer}>
        <Text style={styles.cartText}>🛒 Items in Cart: {cart.length}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  cartCountContainer: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginTop: 15,
  },
  cartText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
