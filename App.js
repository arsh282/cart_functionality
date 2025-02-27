import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './src/context/CartContext';
import HomeScreen from './src/screens/HomeScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={({ route }) => ({
        title: route.params?.userName || 'Checkout',
        headerRight: () => (
          <TouchableOpacity onPress={() => alert('Profile Button Clicked')}>
            <Text style={{ marginRight: 15 }}>👤</Text>
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Shop" component={HomeStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
