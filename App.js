import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./src/context/CartContext";
import HomeScreen from "./src/screens/HomeScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Checkout", { userName: "John Doe" })}>
              <Text style={{ marginRight: 15, fontSize: 16 }}>👤</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
