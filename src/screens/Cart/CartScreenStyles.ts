import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },

    card: {
        padding: 20,
        marginVertical: 8,
        borderRadius: 20,
        overflow: "hidden",
    },

    cardShadow: {
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 6,
    },

    nameText: { 
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5, 
    },

    priceText: {
        fontSize: 18,
        textAlign: "center",
        marginBottom: 5,
    },

    quantityText: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 5,
    },

    emptyText: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 18,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        alignItems: "center",
    },
    
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    quantityButton: {
        padding: 8,
        borderRadius: 10,
        minWidth: 40,
        alignItems: "center",
    },

    checkoutButton: {
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 15,
    },

    total: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },

    buttonText: { 
        color: "#fff", 
        fontWeight: "bold",
        fontSize: 15, 
    },

    darkBg: { backgroundColor: "#222" },
    darkCard: { backgroundColor: "#444" },
    darkText: { color: "#fff" },
    darkButton: { backgroundColor: "#c8af0e" },

    lightBg: { backgroundColor: "#efefef" },
    lightCard: { backgroundColor: "#efefef" },
    lightText: { color: "#000" },
    lightButton: { backgroundColor: "#69ade0" },
});
