import React from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={removeFromCart} />
        )}
      />
      <Text style={styles.total}>Total: ${total}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default CheckoutScreen;
