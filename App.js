import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import { CartProvider } from "./src/context/CartContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Shop" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Checkout" component={CheckoutScreen} options={({ route }) => ({ title: route.params?.userName || "Checkout" })} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Shop" component={HomeStack} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}