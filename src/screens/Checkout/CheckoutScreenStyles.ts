import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },

    text: { 
        fontSize: 16 
    },

    total: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },

    checkoutButton: {
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 15,
    },

    buttonText: { 
        color: "#fff", 
        fontWeight: "bold",
        fontSize: 15, 
    },

    darkBg: { backgroundColor: "#222" },
    darkText: { color: "#fff" },
    darkButton: { backgroundColor: "#c8af0e" },

    lightBg: { backgroundColor: "#efefef" },
    lightText: { color: "#000" },
    lightButton: { backgroundColor: "#69ade0" },
});