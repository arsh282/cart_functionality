import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import { CartProvider, CartContext } from "./src/context/CartContext";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Shop" 
      component={HomeScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Checkout" 
      component={CheckoutScreen} 
      options={({ route }) => ({ title: route.params?.userName || "Checkout" })} 
    />
  </Stack.Navigator>
);

const TabNavigator = () => {
  const { cart } = useContext(CartContext);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Shop"
        component={HomeStack}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color, fontSize: 14 }}>
              Shop ({cart.length})
            </Text>
          ),
        }}
      />
      <Tab.Screen name="Checkout" component={CheckoutScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}