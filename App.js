import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./src/context/CartContext";
import HomeScreen from "./src/screens/HomeScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Shop"
      component={HomeScreen}
      options={{
        headerRight: () => <CartIcon />,
        headerTitle: "Shop",
      }}
    />
    <Stack.Screen
      name="Checkout"
      component={CheckoutScreen}
      options={({ route }) => ({
        title: `Checkout - ${route.params.username}`,
      })}
    />
  </Stack.Navigator>
);

const CartIcon = () => (
  <View style={{ marginRight: 15 }}>
    <Ionicons name="cart-outline" size={24} />
  </View>
);

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
