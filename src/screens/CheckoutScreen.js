import React, { useContext } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../context/CartContext";

const CheckoutScreen = ({ route }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const userName = route.params?.userName || "Guest";
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => route.params?.navigation.goBack()}>
          <Text style={styles.backButton}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <Text style={styles.title}>Cart Products</Text>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.productCard}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <TouchableOpacity onPress={() => removeFromCart(index)}>
              <Text style={styles.removeButton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>Total Price: ${totalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 10, backgroundColor: "#ddd" },
  backButton: { fontSize: 24, paddingLeft: 10 },
  userName: { fontSize: 16, fontWeight: "bold", paddingRight: 10 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  productCard: { flexDirection: "row", justifyContent: "space-between", padding: 10, marginBottom: 10, backgroundColor: "#f5f5f5" },
  removeButton: { fontSize: 18, color: "red" },
  totalPrice: { fontSize: 18, textAlign: "center", marginTop: 20 },
});

export default CheckoutScreen;
