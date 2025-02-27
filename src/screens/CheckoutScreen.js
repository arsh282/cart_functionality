import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../components/context/CartContext';

const CheckoutScreen = ({ navigation, route }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const userName = route.params?.userName || 'Guest';

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart Products</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.productCard}>
            <Text>{item.name} - ${item.price}</Text>
            <TouchableOpacity onPress={() => removeFromCart(index)}>
              <Text style={styles.removeButton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total: ${total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  },
  removeButton: { fontSize: 18, color: 'red' },
  totalPrice: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
});

export default CheckoutScreen;
