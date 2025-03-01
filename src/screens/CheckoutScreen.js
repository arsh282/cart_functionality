import React, { useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext'; 
import { Ionicons } from '@expo/vector-icons';

const CheckoutScreen = ({ navigation }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    useEffect(() => {
        navigation.setOptions({
            title: 'Checkout',
            headerLeft: () => (
                <TouchableOpacity 
                    onPress={() => navigation.canGoBack() ? navigation.goBack() : null} 
                    style={styles.backButton}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            {cart.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.cartId}
                    renderItem={({ item }) => (
                        <View style={styles.cartItem}>
                            <Text style={styles.itemText}>{item.name} - ${item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.cartId)} style={styles.deleteButton}>
                                <Ionicons name="trash" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    itemText: {
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    backButton: {
        marginLeft: 10,
    },
});

export default CheckoutScreen;
