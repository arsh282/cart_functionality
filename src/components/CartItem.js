// components/CartItem.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <View style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}>
      <Text>{item.name} - ${item.price}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );
};

export default CartItem;
