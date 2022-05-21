import { View, Text } from "react-native";
import React,{useContext} from "react";
import {  CounterContext } from "../Context/CounterContext";

const Card = () => {
    const { count} = useContext(CounterContext);
    return (
        <View>
            <Text>{count}</Text>
        </View>
    );
};

export default Card;
