import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import { CartProvider } from "./src/context/CartContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CartProvider> {/* ✅ Wraps the entire app */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Shop" component={HomeScreen} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
