import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CounterProvider, CounterContext } from "./Context/CounterContext";
import Counter from "./Components/Counter";
import Display from "./Components/Display";

export default function App() {
    const Tab = createBottomTabNavigator();

    return (
        <CounterProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        tabBarIconStyle: { display: "none" },
                        tabBarLabelPosition: "beside-icon",
                    }}
                >
                    <Tab.Screen name="Counter" component={Counter} />
                    <Tab.Screen name="Display" component={Display} />
                </Tab.Navigator>
            </NavigationContainer>
        </CounterProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
