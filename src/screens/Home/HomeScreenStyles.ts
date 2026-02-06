import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },

    card: {
        width: "100%",
        height: 400,
        borderRadius: 20,
        overflow: "hidden",
    },

    cardShadow: {
        marginVertical: 10,
        marginTop: 20, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
    },

    imageContainer: {
        flex: 2,
        width: "100%",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    content: {
        flex: 1,
        padding: 10,
        paddingBottom: 50,
    },

    headerBar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 70,
        paddingHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 20,
    },

    headerDark: {
        backgroundColor: "#222",
    },

    headerLight: {
        backgroundColor: "#efefef",
    },

    shopTitleHeader: {
        fontSize: 40,
        fontWeight: "bold",
    },

    nameText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
    },

    priceText: {
        fontSize: 15,
        textAlign: "center",
        marginBottom: 5,
    },

    descriptionText: {
        fontSize: 13,
        fontStyle: "italic",
        textAlign: "center",
        marginBottom: 5,
    },

    toggleButton: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },

    toggleButtonTextLight: {
        color: "#fff",
        fontWeight: "600",
    },

    toggleButtonTextDark: {
        color: "#fff",
        fontWeight: "600",
    },

    button: {
        position: "absolute",
        bottom: 15,
        left: 40,
        right: 40,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: "center",
    },

    buttonPressed: {
        opacity: 0.7,
        transform: [{ scale: 0.97 }],
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },

    goToCartButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        height: 55,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",

        marginBottom: 10,

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },

    goToCartButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    },

    darkBg: { backgroundColor: "#222" },
    darkCard: { backgroundColor: "#444" },
    darkText: { color: "#fff" },
    darkButton: { backgroundColor: "#c8af0e" }, //666

    lightBg: { backgroundColor: "#efefef" },
    lightCard: { backgroundColor: "#efefef" },
    lightText: { color: "#000" },
    lightButton: { backgroundColor: "#69ade0" },
});
