import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";
import ProductList from "../components/ProductList";

const products = [
  { id: 1, name: "P1", price: 34, image: "https://via.placeholder.com/100" },
  { id: 2, name: "P2", price: 40, image: "https://via.placeholder.com/100" },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart, cart } = useContext(CartContext);
  const username = "John Doe"; // Replace with dynamic user input if needed

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductList product={item} onAddToCart={addToCart} />
        )}
      />
      <View style={styles.bottomBar}>
        <Text>Cart: {cart.length} items</Text>
        <Button
          title="Checkout"
          onPress={() => navigation.navigate("Checkout", { username })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderTopWidth: 1,
  },
});

export default HomeScreen;
