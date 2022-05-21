import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Card from "./Card";

const Display = () => {
    return (
        <View style={style.container}>
            <Text>The Value of the counter is : </Text>
            <Card />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
}
);

export default Display;
