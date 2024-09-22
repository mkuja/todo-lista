import {Appbar} from "react-native-paper";
import {StyleSheet, Text} from "react-native";
import React from "react";

export default () => {
    return (
        <Appbar.Header style={style.header}>
            <Text style={style.text}>Todo list</Text>
        </Appbar.Header>
    )
}

const style = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
    }
});
