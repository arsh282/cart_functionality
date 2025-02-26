import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button title="❌ Remove" onPress={() => onRemove(item.id)} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    margin: 10,
    backgroundColor: '#ffecec',
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartItem;
