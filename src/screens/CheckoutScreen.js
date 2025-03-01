import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = () => {
    const { cart = [], removeFromCart } = useContext(CartContext); // ✅ Ensure cart is always an array

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Cart</Text>

            {cart.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.cartId}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.cartId)}>
                                <Text style={styles.removeButton}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}

            {/* Total Amount */}
            <Text style={styles.totalText}>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: 'white' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    emptyText: { fontSize: 18, textAlign: 'center', marginTop: 20 },
    cartItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderColor: '#ddd' },
    itemText: { fontSize: 18 },
    removeButton: { fontSize: 16, color: 'red', fontWeight: 'bold' },
    totalText: { fontSize: 20, fontWeight: 'bold', marginTop: 15 },
});

export default CheckoutScreen;
