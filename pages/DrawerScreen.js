import React from "react";
import { View, Text } from "react-native";

export default function DrawerScreen({}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página Drawer</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "violet",
    },
    title: {
        fontSize: 30,
    },
};