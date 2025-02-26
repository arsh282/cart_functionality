import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { CartProvider, useCart } from './src/context/CartContext';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const CartIcon = () => {
  const { cart } = useCart();
  return (
    <View>
      <Ionicons name="cart" size={24} />
      {cart.length > 0 && <Text style={{ color: 'red' }}>{cart.length}</Text>}
    </View>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ tabBarIcon: () => <CartIcon /> }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </CartProvider>
  );
};
