import React, { useContext } from "react";
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet, Image } from "react-native";
import { CartContext } from "../context/CartContext";

const products = [
  { id: "1", name: "P1", price: 34, image: "https://via.placeholder.com/100" },
  { id: "2", name: "P2", price: 34, image: "https://via.placeholder.com/100" },
  { id: "3", name: "P3", price: 34, image: "https://via.placeholder.com/100" },
  { id: "4", name: "P4", price: 34, image: "https://via.placeholder.com/100" },
];

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery</Text>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button title="Add to cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <View style={styles.bottomTab}>
        <Text>Count: {cart.length}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
          <Text style={styles.checkoutButton}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  productCard: { flex: 1, margin: 10, padding: 10, backgroundColor: "#f5f5f5", alignItems: "center" },
  image: { width: 80, height: 80, marginBottom: 10 },
  bottomTab: { flexDirection: "row", justifyContent: "space-between", padding: 15, backgroundColor: "#ddd" },
  checkoutButton: { fontSize: 16, fontWeight: "bold", color: "blue" },
});

export default HomeScreen;
