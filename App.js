// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './src/context/CartContext';
import HomeScreen from './src/screens/HomeScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { Text, TouchableOpacity } from 'react-native'; // Import Text and TouchableOpacity

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={{ color: focused ? 'blue' : 'black' }}>Home</Text> // Example of using Text
              ),
            }}
          />
          <Tab.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{
              tabBarButton: (props) => (
                <TouchableOpacity {...props} style={{ backgroundColor: 'lightblue' }}>
                  <Text style={{ padding: 10 }}>Go to Checkout</Text>
                </TouchableOpacity>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
