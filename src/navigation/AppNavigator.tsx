import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./props";
import HomeScreen from "../screens/Home/HomeScreen";
import CartScreen from "../screens/Cart/CartScreen";
import CheckoutScreen from "../screens/Checkout/CheckoutScreen";
import { ThemeContext } from "../context/ThemeContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: darkMode ? "#333" : "#fff",
                },
                headerTintColor: darkMode ? "#fff" : "#000",
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
    );
}