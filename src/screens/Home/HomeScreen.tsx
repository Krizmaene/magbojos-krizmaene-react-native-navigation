import React, { useContext } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";
import { RootStackParamList } from "../../navigation/props";
import { PRODUCTS } from "../../data/products";
import { styles } from "./HomeScreenStyles";
import { Image } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
    const { addToCart } = useContext(CartContext);
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    const bgStyle = darkMode ? styles.darkBg : styles.lightBg;
    const cardStyle = darkMode ? styles.darkCard : styles.lightCard;
    const textStyle = darkMode ? styles.darkText : styles.lightText;
    const buttonTheme = darkMode ? styles.darkButton : styles.lightButton;

    return (
        <View style={[styles.container, bgStyle]}>
            <View style={[styles.headerBar, darkMode ? styles.headerDark : styles.headerLight]}>
                <Text style={[styles.shopTitleHeader, textStyle]}>
                    ShopCart PH
                </Text>

                <Pressable style={[styles.toggleButton, buttonTheme]} onPress={toggleTheme}>
                    <Text style={darkMode ? styles.toggleButtonTextDark : styles.toggleButtonTextLight}>
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </Text>
                </Pressable>
            </View>
        
            <FlatList
                data={PRODUCTS}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingTop: 80, paddingBottom: 130 }}

                renderItem={({ item }) => (
                    <View style={styles.cardShadow}>

                        <View style={[styles.card, darkMode ? styles.darkCard : styles.lightCard]}>
                            <View style={styles.imageContainer}>
                                <Image source={item.image} style={styles.image} />
                            </View>

                            <View style={styles.content}>
                                <Text style={[styles.nameText, darkMode ? styles.darkText : styles.lightText]}>
                                    {item.name}
                                </Text>

                                <Text style={[styles.priceText, darkMode ? styles.darkText : styles.lightText]}>
                                    Php{item.price}
                                </Text>

                                <Text style={[styles.descriptionText, darkMode ? styles.darkText : styles.lightText]}
                                numberOfLines={3}>
                                    {item.description}
                                </Text>

                                <Pressable
                                    onPress={() => addToCart(item)}
                                    style={({ pressed }) => [
                                        styles.button,
                                        darkMode ? styles.darkButton : styles.lightButton,
                                        pressed && styles.buttonPressed
                                    ]}
                                >
                                    <Text style={styles.buttonText}>Add to Cart</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                )}
            />

            <Pressable
                style={[styles.goToCartButton, darkMode ? styles.darkButton : styles.lightButton]}
                onPress={() => navigation.navigate("Cart")}
            >
                <Text style={styles.goToCartButtonText}>Go to Cart</Text>
            </Pressable>
        </View>
    );
}