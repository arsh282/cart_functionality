import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./src/context/CartContext";
import HomeScreen from "./src/screens/HomeScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack (Shop)
const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Shop"
      component={HomeScreen}
      options={{
        headerTitle: "Shop",
      }}
    />
  </Stack.Navigator>
);

// App Navigation
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {/* Home (Shop) Tab */}
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="storefront-outline" size={size} color={color} />
              ),
            }}
          />

          {/* Checkout Tab */}
          <Tab.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
