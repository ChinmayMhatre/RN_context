import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React,{useContext} from "react";
import { CounterContext} from "../Context/CounterContext";

const Counter = () => {
    const { count,setCount } = useContext(CounterContext);
    return (
        <View style = {style.container} >
            <Text>Click to Increase Counter</Text>
            <TouchableOpacity style={style.button} onPress={()=>{
                setCount(count+1);
            }} >
                <Text style={style.buttonText} >Increase Counter</Text>
            </TouchableOpacity>


        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "red",
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: "white"
    }
}
);

export default Counter;
