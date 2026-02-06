import React, { useContext } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { RootStackParamList } from "../../navigation/props";
import { styles } from "./CartScreenStyles";

type Props = NativeStackScreenProps<RootStackParamList, "Cart">;

export default function CartScreen({ navigation }: Props) {
    const { cart, increaseQty, decreaseQty } = useContext(CartContext);
    const { darkMode } = useContext(ThemeContext);

    const bgStyle = darkMode ? styles.darkBg : styles.lightBg;
    const cardStyle = darkMode ? styles.darkCard : styles.lightCard;
    const textStyle = darkMode ? styles.darkText : styles.lightText;
    const buttonTheme = darkMode ? styles.darkButton : styles.lightButton;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <View style={[styles.container, bgStyle]}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={
                    <Text style={[styles.emptyText, textStyle]}>
                        Cart is empty 🛒
                    </Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.cardShadow}>
                        <View style={[styles.card, cardStyle]}>
                            <View style={styles.topRow}>
                                <Text style={[styles.nameText, textStyle]} numberOfLines={1}>
                                    {item.name}
                                </Text>

                                <Text style={[styles.priceText, textStyle]}>
                                    Php{item.price * item.quantity}
                                </Text>
                            </View>
                            
                            <View style={styles.row}>
                            <Pressable
                                style={[styles.quantityButton, buttonTheme]}
                                onPress={() => decreaseQty(item.id)}
                            >
                                <Text style={styles.buttonText}>-</Text>
                            </Pressable>

                            <Text style={[styles.quantityText, textStyle]}>Quantity: {item.quantity}</Text>

                            <Pressable
                                style={[styles.quantityButton, buttonTheme]}
                                onPress={() => increaseQty(item.id)}
                            >
                                <Text style={styles.buttonText}>+</Text>
                            </Pressable>
                            </View>
                        </View>
                    </View>
                )}
            />

            <Text style={[styles.total, textStyle]}>Total: Php{total}</Text>

            <Pressable
                style={[styles.checkoutButton, buttonTheme]}
                onPress={() => navigation.navigate("Checkout")}
            >
                <Text style={styles.buttonText}>Proceed to Checkout</Text>
            </Pressable>
        </View>
    );
}