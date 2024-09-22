import {StyleSheet, View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import React from "react";

export default ({addButtonCb}) => {
    const [text, setText] = React.useState("")

    return (
        <View style={style.container}>
            <TextInput style={style.textInput}
                       onChangeText={(t) => {setText(t)}}
                       label="Description"
            />
            <Button mode="contained" onPress={() => addButtonCb(text)}>Save</Button>
        </View>
    )
}

let style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: 16,
        marginTop: 16,
        marginRight: 16,
        marginBottom: 32,
        height: "auto",
    },
    textInput: {
        fontSize: 16,
        alignSelf: "baseline",
        minWidth: "60%"
    }
})