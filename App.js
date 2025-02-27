import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './src/components/context/CartContext';
import HomeScreen from './src/screens/HomeScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { Text, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen 
      name="Checkout"
      component={CheckoutScreen}
      options={({ route }) => ({
        headerTitle: route.params?.userName || 'Checkout',
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
          <Tab.Screen 
            name="Checkout"
            component={CheckoutScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Checkout', { userName: 'John Doe' })}>
                  <Text style={{ marginRight: 15, fontSize: 16 }}>👤 Profile</Text>
                </TouchableOpacity>
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
