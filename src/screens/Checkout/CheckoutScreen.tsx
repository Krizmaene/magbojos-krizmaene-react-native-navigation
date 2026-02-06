import React, { useContext } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { RootStackParamList } from "../../navigation/props";
import { styles } from "./CheckoutScreenStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Checkout">;

export default function CheckoutScreen({ navigation }: Props) {
    const { cart, clearCart } = useContext(CartContext);
    const { darkMode } = useContext(ThemeContext);

    const bgStyle = darkMode ? styles.darkBg : styles.lightBg;
    const textStyle = darkMode ? styles.darkText : styles.lightText;
    const buttonTheme = darkMode ? styles.darkButton : styles.lightButton;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (cart.length === 0) {
            Alert.alert(
                "Empty Cart",
                "Your cart is empty."
            );
            return;
        }
        
        Alert.alert("Success", "Checkout successful 🎉", [
            {
                text: "OK",
                onPress: () => {
                    clearCart();
                    navigation.navigate("Home");
                },
            },
        ]);
    };

    return (
        <View style={[styles.container, bgStyle]}>
        {cart.map((item) => (
            <View key={item.id} style={styles.row}>
            <Text style={[styles.text, textStyle]}>{item.name}</Text>
            <Text style={[styles.text, textStyle]}>
                Php{item.price * item.quantity}
            </Text>
            </View>
        ))}

        <Text style={[styles.total, textStyle]}>Total: Php{total}</Text>

        <Pressable style={[styles.checkoutButton, buttonTheme]} onPress={handleCheckout}>
            <Text style={styles.buttonText}>Confirm Checkout</Text>
        </Pressable>
        </View>
    );
}