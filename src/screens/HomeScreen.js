import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";
import ProductList from "../components/ProductList";

const products = [
  { id: 1, name: "P1", price: 34, image: "https://via.placeholder.com/100" },
  { id: 2, name: "P2", price: 40, image: "https://via.placeholder.com/100" },
];

const HomeScreen = () => {
  const { addToCart } = useContext(CartContext);

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
});

export default HomeScreen;
