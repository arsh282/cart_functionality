// screens/CheckoutScreen.js
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import CartItem from '../components/CartItem';

const CheckoutScreen = ({ cartItems, totalPrice, removeFromCart }) => {
  return (
    <ScrollView style={{ padding: 20 }}>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <Text>Total: ${totalPrice}</Text>
    </ScrollView>
  );
};

export default CheckoutScreen;
